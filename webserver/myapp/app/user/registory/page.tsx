'use client';
//@ts-ignore
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (event.target.password.value != event.target.confirm_password.value) {
      alert("passwords don't match")
      return false
    }

    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
      role: "guest"
    }

    const JSONdata = JSON.stringify(data)
    const endpoint = '/api/user/register'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }
    const res_data = await fetch(endpoint, options);
    const res = await res_data.json();
    if (res.message == 'success') {
      router.push('/')
    } else if (res.message == 'already exists') {
      alert("email already exists");
      return false
    } else {
      alert("something went wrong");
      return false
    }
  }

  return (
    <>
      <h2 className="uk-text-center">登録</h2>
      <div className="uk-width-3-5 uk-align-center uk-grid uk-grid-stack" uk-grid="true">
        <form className="uk-form-horizontal uk-margin-large uk-first-column"
          onSubmit={handleSubmit}>
          <div className="uk-margin">
            <label className="uk-form-label" htmlFor="roll">name</label>
            <div className="uk-form-controls">
              <input
                className="uk-input"
                type="text"
                name="name"
                required
                minLength="1"
              />
            </div>
          </div>
          <div className="uk-margin">
            <label className="uk-form-label" htmlFor="roll">email</label>
            <div className="uk-form-controls">
              <input
                className="uk-input"
                type="email"
                name="email"
                required
                pattern="[^ @]*@[^ @]*"
              />
            </div>
          </div>
          <div className="uk-margin">
            <label className="uk-form-label" htmlFor="roll">password</label>
            <div className="uk-form-controls">
              <input
                className="uk-input"
                type="password"
                name="password"
                required
                minLength="8"
              />
            </div>
          </div>
          <div className="uk-margin">
            <label className="uk-form-label" htmlFor="roll">confirm password</label>
            <div className="uk-form-controls">
              <input
                className="uk-input"
                type="password"
                name="confirm_password"
                required
                minLength="8"
              />
            </div>
          </div>
          <div className="uk-margin">
            <button className="uk-button uk-button-secondary uk-width-1-1 uk-margin-small-bottom" type="submit">送信</button>
          </div>
        </form>
      </div>
    </>
  )
}
