
import { useId, useState, useRef } from 'react'
import styles from '../styles/Search.module.css'




const useSearchForm = ({ idText, idTechnology, idLocation, idExperience, onSearch, onTextFilter }) => {

    const timeOutId = useRef(null)

    const [searchText, setSearchText] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        if (event.target.name === idText) { return }
        const filters = {
            search: formData.get(idText),
            technology: formData.get(idTechnology),
            location: formData.get(idLocation),
            experience: formData.get(idExperience)
        }

        onSearch(filters);
    }

    const handleTextChange = (event) => {
        const text = event.target.value
        setSearchText(text)


        if (timeOutId.current) {
            clearTimeout(timeOutId.current)
        }

        timeOutId.current = setTimeout(() => {
            onTextFilter(text)

        }, 500);
    }

    return { searchText, handleSubmit, handleTextChange }
}

export function Search({ onTextFilter, onSearch,initialText }) {
    const idText = useId();
    const idLocation = useId();
    const idTechnology = useId();
    const idExperience = useId();

    const { handleSubmit, handleTextChange } = useSearchForm({ idText, idTechnology, idLocation, idExperience, onSearch, onTextFilter })


    return <>
        <form onChange={handleSubmit} htmlFor="miBoton" id={styles.form}>
            <div className={styles.search}>
                <input type="text" name={idText} className={styles.input}
                defaultValue={initialText}
                    onChange={handleTextChange} placeholder="Buscar empleos por titulo, habilidad o empresa" />

            </div>


            <div className={styles.selectors}>
                <select name={idTechnology} id="selector-tecnologia">
                    <option value="">Tecnologia</option>
                    <option value="javascript">JavaScript</option>
                    <option value="mobile">mobile</option>
                    <option value="python">python</option>
                    <option value="react">React</option>
                </select>

                <select name={idLocation} id="selector-ubicacion">
                    <option value="">Ubicación</option>
                    <option value="remoto">Remoto</option>
                    <option value="cdmx">Ciudad de México</option>
                    <option value="guadalajara">Guadalajara</option>
                    <option value="monterrey">Monterrey</option>
                    <option value="barcelona">Barcelona</option>
                </select>


                <select name={idExperience} id="selector-experiencia">
                    <option value="">Experencia</option>
                    <option value="mid-level">mid-level</option>
                    <option value="junior">Junior</option>
                    <option value="senior">Senior</option>
                </select>
            </div>

        </form>


    </>
}