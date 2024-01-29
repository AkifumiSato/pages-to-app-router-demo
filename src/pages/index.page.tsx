import Head from "next/head";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";

type Inputs = {
  message: string;
};

export default function Home() {
  const { register, handleSubmit } = useForm<Inputs>();
  const router = useRouter();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
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
            message: <input type="text" {...register("message")} />
          </div>
          <button>submit</button>
        </form>
      </main>
    </>
  );
}
