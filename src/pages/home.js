import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
const Home = () => {

  const [post,setPost]=useState([]);
  let newArray =[22,35];
  newArray=[...newArray,99,66];
  console.log(newArray);

  const[showModal,setModal]=useState(false);

  const blogSchema = Yup.object().shape({
   title:Yup.string().min(5,'Too short').max(200,'too long').required('title is required'),
   detail:Yup.string().min(5,'Too short').max(200,'too long').required('detail is required'),

  });

  const formik = useFormik({
    initialValues:{
      title:'',
      detail:''
    },
    onSubmit:(val,{resetForm})=>{
      const newPost={
        title:val.title,
        detail:val.detail
      };
      setPost([...post,]);
    // console.log(val);
    resetForm();
    setModal(false)
    },
    validationSchema: blogSchema
  });

  const id ='I am Nisha00001'

  const nav = useNavigate();
  const movies ={
    title:'Avatar',
    genre:'Friction'
  };

  return (
    <div className='p-[2%]'>

<div>
      <button onClick={()=>{
        nav('/about',{state:movies})
      }} className='bg-yellow-400 p-2 my-2 '>Go to About Page with data(object)</button>
      </div>


     <div>
      <Link to={`/detail/${id}`}><button className='bg-yellow-400 p-2 my-2 '>Go to Detail Page</button></Link>
      </div>

     <button onClick={()=> setModal(true)}  className='bg-pink-800 p-2 rounded text-white hover:text-blue-600'>Creat Post</button>

     {post.map((p)=>{
      return <div className='p-5 shadow-lg' key={p.id}>
        <h1>{p.title}</h1>
        <p>{p.detail}</p>
      </div>
     })}

      {showModal ?  <form onSubmit={formik.handleSubmit} className='flex justify-center'>
      <div className='w-[40%] shadow-2xl bg-green-400 p-6 space-y-3 items-center m-h-2xl'>
      
      <div className='flex justify-between'>
        <h1 className='text-2xl'>Add Some Blog</h1>
        <button onClick={()=>setModal(false)}><i className="fa-brands fa-xbox fa-2xl text-red-500"></i></button>
      </div>
      
      <div className=' flex flex-col space-y-2'>
        <label htmlFor="title">Title</label>
        <input onChange={formik.handleChange} value={formik.values.title} className='border border-gray-500 outline-none px-2 py-2' type="text" id='title' name='title' />
      {formik.errors.title && formik.touched.title ? <h1 className='text-pink-600'>{formik.errors.title}</h1>:''}
      </div>
      
      <div className=' flex flex-col space-y-2'>
        <label onChange={formik.handleChange} value={formik.values.detail}  htmlFor="detail">Detail</label>
        <input className='border border-gray-500 outline-none px-2 py-2' type="text" id='detail' name='detail' />
        {formik.errors.detail && formik.touched.detail ? <h1 className='text-pink-600'>{formik.errors.detail}</h1>:''}

      </div>

       <div>      <button className='bg-blue-600 p-2 w-[40%] rounded' type='submit'>Submit</button>
       </div>
      
      </div>
     
      </form>:null}

    </div>
  )
}

export default Home
