import React from 'react';
import TenantItem from './TenantItem';

class TenantList extends React.Component{
    render(){
        return (
            <div> 
                {this.props.tenants.map(tenant => (
                    <TenantItem 
                        key={tenant.id} 
                        tenant={tenant} 
                        tenants={this.props.tenants} 
                        handleChange={this.props.handleChange} 
                        deleteTenant={this.props.deleteTenant} 

                    />
                ))} 
            </div>
        )
    }
}
export default TenantList;


