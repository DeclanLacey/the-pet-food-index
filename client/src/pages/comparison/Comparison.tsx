import "./Comparison.css"

export function renderPetTypeOptions() {

}

export function renderBrandOptions() {

}

export function renderFoodOptions() {

}



export function Comparison() {


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
