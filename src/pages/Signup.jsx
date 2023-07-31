import React from 'react'
import styled from 'styled-components'
import BackgroundImage from '../components/BackgroundImage';
import Header from '../components/Header';

const Container = styled.div``;

const Signup = () => {
  return (
    <Container className='relative  '>
      <BackgroundImage></BackgroundImage>
      <Header></Header>
      <div className='absolute top-0 left-0 bg-blue-700 h-screen w-screen grid '>
        <div className="body flex flex-col">
            <div className="flex flex-col absolute ">
                <h1>Unlimited movies, TV shows and more</h1>
                <h4>Watch anywhere. Cancel anytime</h4>
                <h6>Ready to watch? Enter your email to create or restart your membership</h6>
            </div> {/* end of text */}
            <div className='form'>
                <input type="email" placeholder='Email Address' name='email'/>
                <input type="password" placeholder='Password' name='password'/>
                <button>Get Started</button>
            </div> {/* end of input */}
            <button>Login</button>
        </div> {/* end of body */}
      </div>
    </Container>
  )
}

export default Signup
