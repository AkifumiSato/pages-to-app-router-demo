import Head from "next/head";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { trpc } from "@/trpc/client";

type Inputs = {
  message: string;
};

export default function Home() {
  const { register, handleSubmit } = useForm<Inputs>();
  const router = useRouter();
  const mutation = trpc.message.useMutation();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const _newMessage = await mutation.mutateAsync(data);
    await router.push(`/success?message=${data.message}`);
  };

  return (
    <>
      <Head>
        <title>Hello world</title>
      </Head>
      <main>
        <h1>Hello world</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Post form</h2>
          <div>
            <label>
              message: <input type="text" {...register("message")} />
            </label>
          </div>
          <button>submit</button>
        </form>
      </main>
    </>
  );
}
