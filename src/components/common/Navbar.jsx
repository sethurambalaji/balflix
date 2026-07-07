import React from 'react';
import {LoginOutlined,ShoppingCartOutlined} from '@ant-design/icons';
import { Space } from 'antd';

const Navbar = () => {
  return(
    <div >
        <nav className="navbar navbar-dark sticky-top" style={{backgroundColor:'#720455',color:'#FDF4AF'}}>
            <div className="container-fluid" style={{backgroundColor:'#720455',color:'#FDF4AF'}}>
                <a className="navbar-brand" href="#">Balflix</a>
                <div className="d-inline-flex justify-content-end align-items-right ">
                    <a className="navbar-brand" href="#" alt="Login">
                        <Space>
                            <LoginOutlined style={{ fontSize: '24px', color: '#FDF4AF' }} />
                        </Space>
                    </a>
                    
                    <a className="navbar-brand" href="#" alt="Shopping Cart">
                       <Space>
                            <ShoppingCartOutlined style={{ fontSize: '24px', color: '#FDF4AF' }} />
                        </Space>
                    </a>
                </div>
                
            </div>
        </nav>
    </div>
  )
}

export default Navbar;