import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const Container = styled.div`
    background-color: #f4f4f4 ; 
    box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.1);
    padding-bottom: 20px;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
flex: 1;
padding:35px;
display: flex;
align-items: center;
`
const Input = styled.input`
    border: none;
    height:28px;
    width: 245px;
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.15);
 
`
const SearchContainer = styled.div`
 height: 29px;
 width: 39px;
 border: none;
 padding-left: 10px;
 display: flex;
 align-items: center;
 color: white;
 background-color: #ff6600;
 cursor: pointer;

`
const Center = styled.div`
flex: 1;
margin: 40px;
cursor: pointer;
`
const Right = styled.div`

flex: 1;
display: flex;
align-items: center;
justify-content: flex-start;

`
const MenuItem = styled.div`
font-size: 15px;
    cursor: pointer;
    margin-left: 25px;
    justify-content: center;
    &:hover {
    color: #ff6600;
    border-bottom: 1px solid #ff6600;
  }
  &:active {
    color: red;
  }
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
`
const Menu = styled.div`
    align-items: center;
    justify-content:center;
    margin-left: 450px;

`
const MenuLink = styled.a`
font-size: 15px;
margin-left: 400px;
color: black;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
margin: 0 1.5rem;
    text-transform: uppercase;
    font-weight: 500;
  text-decoration:none;


  &:hover {
    color: #ff6600;
    border-bottom: 1px solid #ff6600;
  }
  &:active {
    color: red;
  }
`



const Navbar = () => {
    return (
        <>
        <Container >
        <Wrapper>
        <Left>
        <Input  placeholder='Search...'/>
            <SearchContainer >
            <SearchIcon />
            </SearchContainer>
        </Left>
        
        <Center><svg width="320" height="52" viewBox="0 0 320 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.93872 16.24C1.64026 16.3592 1.38386 16.5643 1.20193 16.8292C1.02001 17.0941 0.920735 17.4071 0.916665 17.7284C0.912594 18.0498 1.00391 18.3652 1.17907 18.6346C1.35422 18.9041 1.60535 19.1156 1.90069 19.2423C2.19603 19.369 2.52233 19.4054 2.83831 19.3467C3.15429 19.288 3.44577 19.1369 3.67589 18.9125C3.906 18.6882 4.06442 18.4006 4.13111 18.0862C4.19779 17.7718 4.16976 17.4447 4.05054 17.1462C3.89067 16.746 3.57836 16.4257 3.18232 16.2557C2.78628 16.0858 2.33894 16.0801 1.93872 16.24Z" fill="#666666"/>
<path d="M36.8022 5.80086C37.6296 5.47033 38.0325 4.53159 37.7019 3.70413C37.3714 2.87666 36.4327 2.47382 35.6052 2.80435C34.7777 3.13488 34.3749 4.07362 34.7054 4.90109C35.0359 5.72855 35.9747 6.13139 36.8022 5.80086Z" fill="#666666"/>
<path d="M16.39 3.54316C16.6876 3.42675 16.944 3.22457 17.1265 2.96226C17.3091 2.69995 17.4096 2.38933 17.4154 2.06979C17.4212 1.75026 17.3319 1.43621 17.159 1.16748C16.986 0.898741 16.7371 0.687428 16.4439 0.560338C16.1507 0.433249 15.8263 0.396109 15.5119 0.453629C15.1976 0.511149 14.9074 0.660737 14.6781 0.883422C14.4489 1.10611 14.291 1.39185 14.2244 1.70442C14.1578 2.01699 14.1855 2.3423 14.304 2.63908C14.462 3.03459 14.7699 3.35159 15.1607 3.52095C15.5515 3.69031 15.9934 3.6983 16.39 3.54316Z" fill="#666666"/>
<path d="M35.0251 8.23544C33.802 9.08297 32.6697 10.0546 31.6463 11.1349C30.4088 12.481 29.3225 13.9585 28.4069 15.5411C26.9969 14.7568 25.6763 13.8218 24.4682 12.7524C22.4764 10.8859 20.6218 8.87819 18.9189 6.74493C18.7581 6.54343 18.5349 6.40117 18.2844 6.34056C18.0339 6.27995 17.7703 6.30445 17.5353 6.41019C17.2921 6.49549 17.0842 6.65932 16.9443 6.87585C16.8045 7.09237 16.7408 7.34927 16.7631 7.60605C17.0006 10.3254 17.0396 13.0585 16.8799 15.7835C16.7437 17.3881 16.4292 18.9726 15.9423 20.5076C14.1867 20.006 12.3841 19.6873 10.563 19.5567C9.11046 19.4743 7.65337 19.5372 6.21337 19.7443C5.99969 19.7753 5.79891 19.8654 5.63359 20.0043C5.46828 20.1432 5.34499 20.3254 5.27757 20.5306C5.20993 20.7417 5.20417 20.9678 5.26098 21.1821C5.3178 21.3964 5.4348 21.59 5.59815 21.7399C9.50007 25.5724 12.9017 29.883 15.7222 34.569C15.867 34.8047 16.0911 34.9809 16.3542 35.066C16.6173 35.1511 16.9022 35.1394 17.1575 35.0331L37.6372 26.8524C37.8955 26.7536 38.11 26.5658 38.2421 26.3228C38.3742 26.0799 38.4152 25.7978 38.3577 25.5272C37.1735 20.1877 36.6691 14.7198 36.8567 9.25363C36.8718 9.03244 36.8232 8.81154 36.7168 8.61707C36.6103 8.4226 36.4503 8.2627 36.2558 8.15627C36.064 8.05249 35.8468 8.00486 35.6291 8.01886C35.4114 8.03287 35.2021 8.10793 35.0251 8.23544V8.23544ZM18.2351 30.503C17.9989 30.5999 17.7392 30.6244 17.4891 30.5734C17.2389 30.5224 17.0095 30.3982 16.8301 30.2166C16.6506 30.035 16.5292 29.8042 16.4811 29.5534C16.4331 29.3027 16.4606 29.0433 16.5602 28.8082C16.6598 28.5732 16.827 28.373 17.0406 28.2331C17.2542 28.0933 17.5045 28.02 17.7598 28.0227C18.0151 28.0253 18.2639 28.1037 18.4745 28.248C18.6851 28.3923 18.8482 28.5959 18.9429 28.833C19.0689 29.1484 19.0652 29.5009 18.9327 29.8137C18.8002 30.1264 18.5494 30.3742 18.2351 30.503ZM25.942 27.4245C25.6344 27.5147 25.3042 27.4869 25.016 27.3467C24.7277 27.2064 24.5021 26.9638 24.3832 26.6661C24.2643 26.3684 24.2606 26.0371 24.3729 25.7369C24.4852 25.4366 24.7054 25.189 24.9904 25.0424C25.2981 24.9523 25.6282 24.98 25.9165 25.1203C26.2047 25.2605 26.4303 25.5032 26.5492 25.8009C26.6681 26.0986 26.6718 26.4299 26.5595 26.7301C26.4472 27.0304 26.227 27.278 25.942 27.4245ZM33.6596 24.3417C33.4234 24.4386 33.1637 24.463 32.9135 24.412C32.6634 24.361 32.434 24.2369 32.2545 24.0553C32.0751 23.8737 31.9536 23.6429 31.9056 23.3921C31.8575 23.1414 31.8851 22.882 31.9847 22.6469C32.0843 22.4119 32.2515 22.2117 32.4651 22.0718C32.6787 21.932 32.929 21.8587 33.1843 21.8613C33.4396 21.864 33.6883 21.9424 33.899 22.0867C34.1096 22.231 34.2726 22.4346 34.3673 22.6717C34.4934 22.9871 34.4897 23.3396 34.3572 23.6524C34.2246 23.9651 33.9739 24.2129 33.6596 24.3417Z" fill="#666666"/>
<path d="M40.1914 43.1045C39.8838 45.7363 38.9097 47.77 37.269 49.2056C35.6398 50.6297 33.4694 51.3418 30.7578 51.3418C27.8184 51.3418 25.46 50.2879 23.6826 48.1802C21.9167 46.0724 21.0337 43.2526 21.0337 39.7207V37.3281C21.0337 35.0153 21.4438 32.9816 22.2642 31.2271C23.0959 29.4725 24.2694 28.1281 25.7847 27.1938C27.3 26.2482 29.0545 25.7754 31.0483 25.7754C33.6916 25.7754 35.8107 26.516 37.4058 27.9971C39.0008 29.4668 39.9294 31.5062 40.1914 34.1152H36.8931C36.6082 32.1328 35.9873 30.6973 35.0303 29.8086C34.0846 28.9199 32.7573 28.4756 31.0483 28.4756C28.952 28.4756 27.3057 29.2503 26.1094 30.7998C24.9245 32.3493 24.332 34.5539 24.332 37.4136V39.8232C24.332 42.5234 24.896 44.6711 26.0239 46.2661C27.1519 47.8612 28.7298 48.6587 30.7578 48.6587C32.5807 48.6587 33.9764 48.2485 34.9448 47.4282C35.9246 46.5965 36.5741 45.1553 36.8931 43.1045H40.1914ZM58.4263 44.5059H48.0015L45.6602 51H42.2764L51.7783 26.1172H54.6494L64.1685 51H60.8018L58.4263 44.5059ZM48.9927 41.8057H57.4521L53.2139 30.1675L48.9927 41.8057ZM74.8496 39.9087C72.0355 39.0998 69.9847 38.1086 68.6973 36.9351C67.4212 35.7502 66.7832 34.2918 66.7832 32.5601C66.7832 30.6004 67.5636 28.9826 69.1245 27.7065C70.6968 26.4191 72.7362 25.7754 75.2427 25.7754C76.9517 25.7754 78.4727 26.1058 79.8057 26.7666C81.1501 27.4274 82.1868 28.3389 82.916 29.501C83.6566 30.6631 84.0269 31.9334 84.0269 33.312H80.7285C80.7285 31.8081 80.25 30.6289 79.293 29.7744C78.3359 28.9085 76.9858 28.4756 75.2427 28.4756C73.6248 28.4756 72.3602 28.8345 71.4487 29.5522C70.5487 30.2586 70.0986 31.2441 70.0986 32.5088C70.0986 33.5228 70.5259 34.383 71.3804 35.0894C72.2463 35.7843 73.7103 36.4224 75.7725 37.0034C77.846 37.5845 79.4639 38.2282 80.626 38.9346C81.7995 39.6296 82.6654 40.4442 83.2236 41.3784C83.7933 42.3127 84.0781 43.4121 84.0781 44.6768C84.0781 46.6934 83.292 48.3112 81.7197 49.5303C80.1475 50.738 78.0454 51.3418 75.4136 51.3418C73.7046 51.3418 72.1095 51.0171 70.6284 50.3677C69.1473 49.7069 68.0023 48.8068 67.1934 47.6675C66.3958 46.5282 65.9971 45.235 65.9971 43.7881H69.2954C69.2954 45.292 69.848 46.4826 70.9531 47.3599C72.0697 48.2257 73.5565 48.6587 75.4136 48.6587C77.1453 48.6587 78.4727 48.3055 79.3955 47.5991C80.3184 46.8927 80.7798 45.93 80.7798 44.7109C80.7798 43.4919 80.3525 42.5519 79.498 41.8911C78.6436 41.2189 77.0941 40.5581 74.8496 39.9087ZM105.492 28.8174H97.4937V51H94.2295V28.8174H86.2485V26.1172H105.492V28.8174ZM123.248 39.4985H112.464V48.3169H124.991V51H109.183V26.1172H124.82V28.8174H112.464V36.8154H123.248V39.4985ZM132.374 48.3169H144.166V51H129.076V26.1172H132.374V48.3169ZM174.894 43.1045C174.586 45.7363 173.612 47.77 171.971 49.2056C170.342 50.6297 168.172 51.3418 165.46 51.3418C162.521 51.3418 160.162 50.2879 158.385 48.1802C156.619 46.0724 155.736 43.2526 155.736 39.7207V37.3281C155.736 35.0153 156.146 32.9816 156.966 31.2271C157.798 29.4725 158.972 28.1281 160.487 27.1938C162.002 26.2482 163.757 25.7754 165.75 25.7754C168.394 25.7754 170.513 26.516 172.108 27.9971C173.703 29.4668 174.632 31.5062 174.894 34.1152H171.595C171.31 32.1328 170.689 30.6973 169.732 29.8086C168.787 28.9199 167.459 28.4756 165.75 28.4756C163.654 28.4756 162.008 29.2503 160.812 30.7998C159.627 32.3493 159.034 34.5539 159.034 37.4136V39.8232C159.034 42.5234 159.598 44.6711 160.726 46.2661C161.854 47.8612 163.432 48.6587 165.46 48.6587C167.283 48.6587 168.679 48.2485 169.647 47.4282C170.627 46.5965 171.276 45.1553 171.595 43.1045H174.894ZM182.687 48.3169H194.479V51H179.388V26.1172H182.687V48.3169ZM216.234 39.3618C216.234 41.8 215.824 43.9305 215.003 45.7534C214.183 47.5649 213.021 48.9492 211.517 49.9062C210.013 50.8633 208.259 51.3418 206.253 51.3418C204.294 51.3418 202.556 50.8633 201.041 49.9062C199.526 48.9378 198.347 47.5649 197.503 45.7876C196.672 43.9989 196.244 41.931 196.222 39.584V37.7896C196.222 35.397 196.638 33.2835 197.469 31.4492C198.301 29.6149 199.474 28.2135 200.99 27.2451C202.516 26.2653 204.26 25.7754 206.219 25.7754C208.213 25.7754 209.968 26.2596 211.483 27.228C213.01 28.1851 214.183 29.5807 215.003 31.415C215.824 33.238 216.234 35.3628 216.234 37.7896V39.3618ZM212.97 37.7554C212.97 34.8045 212.377 32.543 211.192 30.9707C210.007 29.387 208.35 28.5952 206.219 28.5952C204.146 28.5952 202.511 29.387 201.314 30.9707C200.13 32.543 199.52 34.7305 199.486 37.5332V39.3618C199.486 42.2215 200.084 44.4717 201.28 46.1123C202.488 47.7415 204.146 48.5562 206.253 48.5562C208.373 48.5562 210.013 47.7871 211.175 46.249C212.337 44.6995 212.936 42.4836 212.97 39.6011V37.7554ZM237.87 28.8174H229.872V51H226.607V28.8174H218.626V26.1172H237.87V28.8174ZM260.685 51H257.386V39.4985H244.842V51H241.561V26.1172H244.842V36.8154H257.386V26.1172H260.685V51ZM270.033 51H266.751V26.1172H270.033V51ZM295.172 51H291.874L279.347 31.8252V51H276.048V26.1172H279.347L291.908 45.3774V26.1172H295.172V51ZM319.371 47.7358C318.528 48.9435 317.349 49.8493 315.833 50.4531C314.33 51.0456 312.575 51.3418 310.57 51.3418C308.542 51.3418 306.742 50.869 305.169 49.9233C303.597 48.9663 302.378 47.6105 301.512 45.856C300.658 44.1014 300.219 42.0677 300.196 39.7549V37.5845C300.196 33.8361 301.068 30.9308 302.811 28.8687C304.566 26.8065 307.027 25.7754 310.194 25.7754C312.792 25.7754 314.882 26.4419 316.466 27.7749C318.049 29.0965 319.018 30.9764 319.371 33.4146H316.09C315.475 30.1219 313.515 28.4756 310.211 28.4756C308.012 28.4756 306.343 29.2503 305.204 30.7998C304.076 32.3379 303.506 34.571 303.495 37.499V39.5327C303.495 42.3241 304.133 44.5457 305.409 46.1978C306.685 47.8384 308.411 48.6587 310.587 48.6587C311.817 48.6587 312.894 48.522 313.817 48.2485C314.74 47.9751 315.503 47.5137 316.107 46.8643V41.2759H310.348V38.6099H319.371V47.7358Z" fill="black"/>
</svg>
</Center>
        <Right>
        <MenuItem><PersonIcon /></MenuItem>
            <MenuItem>Login</MenuItem>
            <MenuItem> <LocalMallIcon /> </MenuItem>
        </Right>
        
        </Wrapper>
        <Menu>
        <MenuLink href="">HOME</MenuLink>
        <MenuLink href="">WHAT'S NEW</MenuLink>
        <MenuLink href="">MENS</MenuLink>
        <MenuLink href="">WOMENS</MenuLink>
        <MenuLink href="">CONTACT US</MenuLink>
        </Menu>
        </Container>
        
        </>
       
       
    )
}

export default Navbar
