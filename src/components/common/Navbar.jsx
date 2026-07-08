import React from 'react';
import {LoginOutlined,ShoppingCartOutlined} from '@ant-design/icons';
import { Space,Badge,Avatar } from 'antd';
import logo from '../../images/balflix_icon.png';

const Navbar = () => {
  return(
    <div className='my-0'>
        <nav className="navbar navbar-dark sticky-top py-0 " style={{backgroundColor:'#101D30',color:'#FDF4AF'}}>
            <div className="container-fluid " style={{backgroundColor:'##101D30',color:'#FDF4AF'}}>
                <a className="navbar-brand" href="#">
                    <img 
                        src={logo} 
                        alt="custom-icon" 
                        style={{ 
                            width: '10em', 
                            height: '4em', 
                            objectFit: 'contain' ,
                            paddingLeft:'0'
                        }}
                    />
                </a>
                <div className="d-inline-flex justify-content-end align-items-right" 
                    style={{paddingRight:'40px',marginLeft:'auto'}}>
                    <a className="navbar-brand p-2" href="#" alt="Login">
                        <Space>
                            <LoginOutlined style={{ fontSize: '24px', color: '#FDF4AF' }} />
                        </Space>
                    </a>
                    
                    <a className="navbar-brand p-2" href="#" alt="Shopping Cart">
                       <Space>
                            
                            
                                <Badge className="m-0 p-0" size="large" count={5} style={{position:'absolute',left:'15px'}}>
                                    <ShoppingCartOutlined style={{ fontSize: '24px', color: '#FDF4AF' }} />
                                </Badge>
                            
                        </Space>
                    </a>
                </div>
                
            </div>
        </nav>
    </div>
  )
}

export default Navbar;