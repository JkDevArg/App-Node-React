import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/blogs/'

const CompEditBlog = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI + id, {
            title: title,
            content: content
        })
        navigate('/')
    }

    useEffect(() => {
        getBlogById()
    })

    const getBlogById = async () => {
        const res = await axios.get(URI + id)
        setTitle(res.data.title)
        setContent(res.data.content)
    }

    return (
        <div>
            <h3>Actualizar Publicación</h3>
            <form onSubmit={update}>
                <div className="mb-3">
                    <label className="form-label">Titulo<span className='text-danger'>*</span></label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Contenido<span className='text-danger'> (150)</span></label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        type="text"
                        className="form-control"
                        maxLength={150}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-success">Actualizar</button> <a className='btn btn-dark' href='/'>Inicio</a>
            </form>
        </div>
    )

}

export default CompEditBlog