import React from 'react';
import styled from 'styled-components/native';
import PermissionSubview from './sub/PermissionSubview';


const Container = styled.View`

`;

const Geolocation: React.FC = () => {
    return <PermissionSubview type='geolocation' />
}

export default Geolocation;