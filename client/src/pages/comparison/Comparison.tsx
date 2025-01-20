import { useEffect, useState } from "react"
import { getAllPetTypes } from "../../util/serverCalls"
import "./Comparison.css"
import { PetType } from "../../types/Types"

export function renderPetTypeOptions(petTypes: PetType[]) {
  const petTypeOptions = petTypes.map((type) => {
    return <option className="comparison_option" value={type.id}> {type.name}</option>
  })
}

export function renderBrandOptions() {

}

export function renderFoodOptions() {

}

export async function getData(setPetTypes: Function, setLoading: Function, getAllPetTypes: Function) {
  try {
      setLoading(true)
      const data = await getAllPetTypes()
      setPetTypes(data)
      setLoading(false)
    }catch (error) {
      setLoading(false)
      throw new Error(`${error}`)
    }
}

export function Comparison() {

  const [petTypes, setPetTypes] = useState<PetType[]>()
  const [loading, setLoading] = useState<boolean>()

  useEffect(() => {
    getData(setPetTypes, setLoading, getAllPetTypes)
  }, [])

  if (loading) return <></>
  if (!petTypes) return <></>

  console.log(petTypes)

  return (
    <div className='comparison'>
      <h1 className='comparison_title'>Head to head<br></br> comparison</h1>
      <p className='comparison_subtitle'>This tool allows you to compare any two foods in our database, allowing you to easily see the similarities and differences between them.</p>

      <form className='comparison_form'>
        <div className='comparison_form-input-container'>
          <label className='comparison_form-input-label'>Type of pet</label>
          <select className='comparison_form-select-input'>

          </select>
        </div>

        <div className='comparison_form-input-container'>
          <label className='comparison_form-input-label'>Food selection one</label>
          <select className='comparison_form-select-input'>
            <option>Brand</option>
          </select>

          <select className='comparison_form-select-input'>
            <option>Formula</option>
          </select>
        </div>

        <div className='comparison_form-input-container'>
          <label className='comparison_form-input-label'>Food selection two</label>
          <select className='comparison_form-select-input'>
            <option>Brand</option>
          </select>

          <select className='comparison_form-select-input'>
            <option>Formula</option>
          </select>
        </div>

        <div className="comparison_form-submit-btn-container">
          <input className="comparison_form-submit-btn" type="submit" value={"Compare now!"}/>

        </div>
      </form>
    </div>
  )
}
