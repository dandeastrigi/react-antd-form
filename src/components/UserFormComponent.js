import React from 'react'
import { render } from 'react-dom'
import { Form, Field } from 'react-final-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const load = async () => {
  await sleep(300)
  return {
    username: 'Dande',
    firstName: 'Erik'
  }
}

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

class UserFormComponent extends React.Component {
  state = { data: {} }
  async componentDidMount() {
    this.setState({ loading: true })
    const data = await load()
    this.setState({ loading: false, data })
  }

  render() {
    return (
        <Form
          onSubmit={() => {
            console.log("Submiting");
          }}
          initialValues={this.state.data}
          render={({ handleSubmit, pristine, form, submitting, values }) => {
            return (
              <form onSubmit={handleSubmit}>
                {this.state.loading && <div className="loading" />}
                <div>
                  <label>Username</label>
                  <Field
                    name="username"
                    component="input"
                    placeholder="Username"
                  />
                </div>
                <div>
                  <label>First Name</label>
                  <Field
                    name="firstName"
                    component="input"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label>Cep</label>
                  <Field
                    name="cep"
                    component="input"
                    placeholder="Cep"
                  />
                </div>
                <div>
                  <label>City</label>
                  <Field
                    name="city"
                    component="input"
                    placeholder="City"
                  />
                </div>
                <div className="buttons">
                  <button type="submit" disabled={submitting || pristine}>
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={form.reset}
                    disabled={submitting || pristine}
                  >
                    Reset
                  </button>
                </div>
                <pre>{JSON.stringify(values, 0, 2)}</pre>
              </form>
            )
          }}
        />
    )
  }
}

render(<UserFormComponent />, document.getElementById('root'))
export default UserFormComponent;
