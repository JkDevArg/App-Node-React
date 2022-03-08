//Importamos conexión a la DB
import db from "../database/db.js";
import { DataTypes } from "sequelize";

const BlogModel = db.define('blogs', {
    title: { type: DataTypes.STRING },
    content: { type: DataTypes.STRING },
})

export default BlogModel