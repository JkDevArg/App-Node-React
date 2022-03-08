import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const URI = 'http://localhost:8000/blogs/'

const CompShowBlogs = () => {

    const [blogs, setBlog] = useState([])
    useEffect(() => {
        getBlogs()
    }, [])

    const getBlogs = async () => {
        const res = await axios.get(URI)
        setBlog(res.data)
    }

    const deleteBlog = async (id) => {
        await axios.delete(`${URI}${id}`)
        getBlogs()
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn form-control btn-info mt-2 mb-2'><i className="fas fa-plus"></i></Link>
                    <table className='table table-striped table-light table-hover'>
                        <thead className='text-warning'>
                            <tr>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogs.map((blog) => (
                                <tr key={blog.id}>
                                    <td> {blog.title} </td>
                                    <td> {blog.content} </td>
                                    <td>
                                        <Link to={`/edit/${blog.id}`} className='btn btn-warning'><i className="fas fa-edit"></i></Link>
                                        <button onClick={() => deleteBlog(blog.id)} className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompShowBlogs