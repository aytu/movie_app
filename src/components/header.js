import React, { Component } from 'react'
import {menuStyle, fixedMenuStyle} from '../helpers/stylehelper';
import {Link,NavLink} from 'react-router-dom';
import {
    Container, 
    Image,
    Menu,
    Visibility
  } from 'semantic-ui-react'
export default class HeaderCom extends Component {
    state = {
        menuFixed: false,
        overlayFixed: false,
      }
    
      handleOverlayRef = (c) => {
        //const { overlayRect } = this.state   
      }
    
      stickOverlay = () => this.setState({ overlayFixed: true })
    
      stickTopMenu = () => this.setState({ menuFixed: true })
    
      unStickOverlay = () => this.setState({ overlayFixed: false })
    
      unStickTopMenu = () => this.setState({ menuFixed: false })

    render() {
        const { menuFixed } = this.state
        return (
            <div>
                     <Visibility
                            onBottomPassed={this.stickTopMenu}
                            onBottomVisible={this.unStickTopMenu}
                            once={false}
                            >
                            <Menu
                                borderless
                                fixed={menuFixed ? 'top' : undefined}
                                style={menuFixed ? fixedMenuStyle : menuStyle}
                            >
                                <Container text>
                                <Menu.Item>
                                    <Image size='mini' src='https://react.semantic-ui.com/logo.png' />
                                </Menu.Item>
                                <Menu.Item header as={Link} to='/' exact="true">Movieapp</Menu.Item>
                                <Menu.Item as={NavLink} to='/movies' exact>Movies</Menu.Item>
                                <Menu.Item as={NavLink} to='/movies/new'>Add new</Menu.Item>
                                </Container>
                            </Menu>
                      </Visibility>
            </div>
        )
    }
}
