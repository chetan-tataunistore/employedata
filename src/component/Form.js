import React from 'react';
import '../App.css';

class Form extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            data: localStorage.getItem("employedata"),
            errorMsg: false,
            successMsg:''
        }
    }
    handleChange = (e) => {
        
        this.setState({
            name: e.target.value,
            errorMsg:'',
            successMsg:''
        })

    }
    handleSalary = (e) => {
        if (!isNaN(e.target.value)) {
            this.setState({
                salary: e.target.value,
                errorMsg:'',
                successMsg:''
            })
        }

    }
    formSubmit = () => {
      let {name}=this.state;
        if(name.length < 1){    
           this.setState({
            errorMsg: "Please fill both feild" ,
             successMsg:''
         })
        }
        else{
        let arr = [];
        arr = !localStorage.getItem("employedata") ? []:JSON.parse(localStorage.getItem('employedata')) ;
        arr.push({ "name": this.state.name, "salary": this.state.salary });
        localStorage.setItem("employedata", JSON.stringify(arr))
        this.setState({
            name: '',
            salary: '',
            errorMsg: '',
            successMsg:'data saved successfully'
        })
    }
    }
    render () {
        let {errorMsg, successMsg}= this.state;
        return (
            <div className="formContainer" >
                <div className="formHolder">
                      {errorMsg && <span className="formErrorMsg">{errorMsg}</span>}
                      { successMsg&& <span className="formSuccessMsg">{successMsg}</span>}
                    <form>
                        <div className="formBlock" >
                            <label className="label" >
                                <input type="text" className="input" value={this.state.name} placeholder="Name" onChange={this.handleChange} />
                            </label >
                            <label className="label" >
                                <input type="text" className="input" value={this.state.salary} placeholder="Salary" onChange={this.handleSalary} />
                            </ label >

                        </div>
                    </form>
                    <input className="submit" type="submit" onClick={this.formSubmit} value="Submit" />
                </div>
            </div >
      
        );
    }
}

export default Form;