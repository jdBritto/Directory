import { useForm } from "../Hooks/useForm"

export const FormularyComponent = () => {
  const initialForm = {
    
      userName: '',
      email: '',
      password: ''
    
  }
  const {userName, email, password, onInputChange} = useForm(initialForm) 
  // const { userName, email, password } = formState
  const onSubmit = (event) => {
    event.preventDefault()
    console.log(useForm)
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="userName" className="form-label" >User Name</label>
        <input
          type="text"
          className="form-control"
          name="userName"
          placeholder="Enter your Name"
          value={userName}
          onChange={onInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="enailId" className="form-label" >Email address</label>
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Enter Email"
          value={email}
          onChange={onInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label" >Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Password"
          value={password}
          onChange={onInputChange}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
      >Submit</button>
    </form>
  )
}
