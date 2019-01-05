import React, { Component } from 'react';
import './Teacher.css';
import axios from 'axios';
import Search from '../search'
import {Redirect} from  'react-router-dom'
import Teacher from './Teacher'

class Teachers extends Component {
    state = {
        teachers: [],
        id:''
    }
    componentDidMount() {
        axios.get('get/teacher')
            .then((res) => {
                this.setState({
                    teachers: res.data
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    searchTeacher = (name) => {
        console.log('i was research', name)
        this.setState({
            teachers: [name.data]
        })
    }
    teacherClicked = (id) => {
        return(
            <Redirect to = '/teacher' />
        )
        
    }

    render() {
        console.log('teachers', this.state.teachers)
        if (this.state.teachers.length === 1) {
            return (
                <form className='container flux'>
                    < Search search={this.searchTeacher} />
                    <div class="form-group">
                        <tr>
                            <td className='border'>
                                <img src={this.state.teachers[0].image} alt="" className="rounded card" />
                                <h6> {this.state.teachers[0].firstname} {this.state.teachers[0].lastname}</h6>
                                <p> {this.state.teachers[0].major} </p>
                                <button type="submit" class="btn btn-primary" href="/teacher">Profile</button>
                                <br />
                                <br />
                            </td>
                        </tr>
                    </div>
                </form>

            )
        } else {
            return (
                <div className=''>
                    < Search search={this.searchTeacher} />
                    {this.state.teachers.map((teacher) =>
                        <div className='container'>
                            <div class="form-group float-left teacherCard">
                                <tr>
                                    <td className='border'>
                                        <img src={teacher.image} alt="" className="rounded card" />
                                        <h6>{teacher.firstname} {teacher.lastname}</h6>
                                        <p> {teacher.major}</p>
                                        <button type="submit" class="btn btn-primary"  onClick={() => this.teacherClicked(teacher.firstname)}>Profile</button>
                                        <br />
                                        <br />
                                    </td>
                                </tr>
                            </div>
                        </div>
                    )}
                </div>
            )
        }
    }
}


export default Teachers;

