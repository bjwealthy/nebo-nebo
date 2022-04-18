import React from 'react'
import TenantList from './TenantList'
import Header from './Header'
import TenantItem from './TenantItem'
import AddTenant from './AddTenant'
import {v4 as uuidv4} from 'uuid'


class TenantApp extends React.Component{
    state = {
        tenants: [
            {
                id: uuidv4(),
                fullname: "Olusare Adegbagie",
                nepa: '4000',
                lawma: '300',
                security: '200',
                moved: true
            },
            {
                id: uuidv4(),
                fullname: "Olumowe Omogba A",
                nepa: '4000',
                lawma: '300',
                security: '200',
                moved: false
            },
            {
                id: uuidv4(),
                fullname: "Olusabi Omogba B",
                nepa: '4000',
                lawma: '300',
                security: '200',
                moved: false
            },
            {
                id: uuidv4(),
                fullname: "Olutry Omogba C",
                nepa: '4000',
                lawma: '300',
                security: '200',
                moved: false
            },
        ]
    }

    handleChange = (id) => {
        this.setState({
            tenants: this.state.tenants.map(tenant => {
                if (tenant.id === id){
                    tenant.moved = !tenant.moved
                }
                return tenant
            })
        }) 
    }

    deleteTenant = id => {
        this.setState({
            tenants: [
                ...this.state.tenants.filter(tenant => {
                    return tenant.id !== id
                })
            ]
        })
    }

    addTenant = (fullname, nepa, lawma, security, moved) => {
        const newTenant = {
            id: uuidv4(),
            fullname: fullname,
            nepa: nepa,
            lawma: lawma,
            security: security,
            moved: false
        }
        this.setState({
            tenants: [...this.state.tenants, newTenant]
        })
    }

    render(){ 
        return(
            <div className='container'>
                <Header />
                <AddTenant addTenant={this.addTenant}/>
                <TenantList tenants={this.state.tenants} handleChange={this.handleChange} deleteTenant={this.deleteTenant}/>
            </div>
        )
    }
}
export default TenantApp