import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/blogs/'

const CompCreateBlog = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()


    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, { title: title, content: content })
        navigate('/')
    }

    return (
        <div>
            <h3>Crear Publicación</h3>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Titulo<span className='text-danger'>*</span></label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        className='form-control'
                        required
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Contenido<span className='text-danger'> (150)</span></label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        type="text"
                        className='form-control'
                        maxLength={150}
                        required
                    />
                </div>
                <button type='submit' className='btn btn-success'>Crear</button> <a className='btn btn-dark' href='/'>Inicio</a>

            </form>
        </div>
    )
}

export default CompCreateBlog