import { useForm } from "react-hook-form";

export default function Newone() {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
      console.log(data);
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true })} />
      {errors.firstName?.type === 'required' && "First name is required"}
      <br/><br/>
      <input {...register("lastName", { required: true })} />
      {errors.lastName && "Last name is required"}
      <br/><br/>
      <input type="submit" />
    </form>
  );
}