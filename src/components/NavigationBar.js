import React, { Component } from 'react'
import { AppBar, Toolbar, Typography, SvgIcon } from '@material-ui/core';
import { Link } from 'react-router-dom';

function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }
  

export class NavigationBar extends Component {
    render() {
        const { title } = this.props;

        return (
            <AppBar position='static'>
                <Toolbar>
                    <Link to='/'>
                        <HomeIcon style={styles.homeIcon}/>
                    </Link>
                    <Typography variant="h6">
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

const styles = {
    homeIcon: {
        marginRight: 10
    }
}

export default NavigationBar
