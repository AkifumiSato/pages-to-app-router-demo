import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { trpc } from "@/trpc/client";

type MessageFormInputs = {
  message: string;
};

export function MessageForm() {
  const { register, handleSubmit } = useForm<MessageFormInputs>();
  const router = useRouter();
  const mutation = trpc.message.create.useMutation();
  const onSubmit: SubmitHandler<MessageFormInputs> = async (data) => {
    const _newMessage = await mutation.mutateAsync(data);
    await router.push(`/message/success?message=${data.message}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Post form</h2>
      <div>
        <label>
          message: <input type="text" {...register("message")} />
        </label>
      </div>
      <button>submit</button>
    </form>
  );
}
