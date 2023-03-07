import React from 'react';
import { useForm } from 'react-hook-form';
import useHomeWorkStore from '../../store/store';
import style from './home.module.scss';

const Home = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const addnewHomework = useHomeWorkStore((state) => state.addHomework);
  const onSubmit = data => {
    addnewHomework(data);
    reset();
  }

  return (
    <div>
      <h1 className={style.title}>Add Homework</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.inputs}>
          <p>Title</p>
          <input className={style.input} {...register("title", { required: true })} />
          <p>Description</p>
          <textarea className={style.input} {...register("description", { required: true })} />
          <p>Responsable</p>
          <input className={style.input} {...register("personAssigned", { required: true })} />
          <p>Date of Finish</p>
          <input className={style.input} defaultValue="2023-03-06" type='date' {...register("dateOfFinish", { required: true })} />
          {errors.exampleRequired && <span>This field is required</span>}
          <input className={style.btn} type="submit" value='Add Homework' />
        </div>
      </form>
    </div>

  )
}

export default Home