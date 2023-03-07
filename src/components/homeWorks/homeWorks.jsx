import React from 'react';
import useHomeWorkStore from '../../store/store';
import style from './homeWorks.module.scss';

function HomeWorks() {
  const { completeHomework, removefromList, homeworks, unCompletedHomework } = useHomeWorkStore();

    function handleComplete(homeWorkId) {
    completeHomework(homeWorkId);
  }

  function handleDelete(homeWorkId){
    removefromList(homeWorkId)
  }

  function handleunCompleted(homeworkId){
    unCompletedHomework(homeworkId)
  }

  function workToDo() {
    const pendingHomeworks = homeworks.filter((homework) => !homework.isCompleted);
    return (
      <div className={style.listOf}>
          <h2 className={style.title}>Tareas por hacer </h2>
          {pendingHomeworks.map((homework, index) => (
            <div className={style.homeworkCart} key={homework.id}>
              <h2>Title:{homework.title}</h2>
              <p>Description:{homework.description}</p>
              <p>Assigned to: {homework.assignedTo}</p>
              <p>Date of finish: {homework.dateOf}</p>
              <input className={style.btndelete} type="submit" onClick={() => handleDelete(homework.id)} value='Delete homework' />
              <input className={style.btndone} type="submit" onClick={() => handleComplete(homework.id)} value='Mark as done' />
            </div>
            
          ))}
      </div>
    )
  }
  function worksDone() {
    const worksDone = homeworks.filter((homework) => homework.isCompleted);
    return (
      <div className={style.listOf}>
          <h2 className={style.title}>Tareas realizadas</h2>
          {worksDone.map((homework, index) => (
            <div className={style.homeworkCart} key={homework.id}>
              <h2>Title:{homework.title}</h2>
              <p>Description{homework.description}</p>
              <p>Assigned to: {homework.assignedTo}</p>
              <p>Date of finish: {homework.dateOf}</p>
              <input className={style.btndelete} type="submit" onClick={() => handleDelete(homework.id)} value='Delete homework' />
              <input className={style.btndelete} type="submit" onClick={() => handleunCompleted(homework.id)} value='Mark as Uncompleted' />
            </div>

          ))}
      </div>
    )

  }

  return (
    <div>
      {workToDo()}
      {worksDone()}
    </div>
  )
}

export default HomeWorks