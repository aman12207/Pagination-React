import React from 'react'
import { useGlobalContext } from './context'

const RenderList = props => {
  const {selectedData,activeBtn,setActiveBtn} = useGlobalContext();
  // console.log(selectedData)
  console.log(activeBtn)
  const handleClick = (e) =>{
    setActiveBtn(e.target.id);
  }
  const handlePrev = () =>{
    setActiveBtn((activeBtn-10+100)%100);
  }
  const handleNext = () =>{
  console.log(activeBtn)
      setActiveBtn((parseInt(activeBtn)+10)%100);
  }
  const renderBtn = () =>{
    const btnList = [];
    var tempId = 0;
      for(var i = 1 ; i<=10 ;i++){
        btnList.push(<button key={i} id={tempId} onClick={handleClick} className={`page-btn ${i===(activeBtn/10)+1 && 'active-btn'}`}>{i}</button>)
        tempId+=10;
      }
      return btnList;
  }
  return (
    <section className='followers'>
      <div className='container'>
     {selectedData.map(({id,avatar_url,login,html_url})=>{
      return <article key={id} className="card">
        <img src={avatar_url} alt={login}/>
        <h4>{login}</h4>
        <a href={html_url} className="btn">view profile</a>
      </article>
     })}
    </div>
    <div className="btn-container">
      <button onClick={handlePrev} className={`prev-btn `}>Prev</button>
      {
        renderBtn()
      }
      <button onClick={handleNext} className={`next-btn `}>Next</button>
      </div>
    </section>
  )
}

export default RenderList