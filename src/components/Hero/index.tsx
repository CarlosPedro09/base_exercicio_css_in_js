import React from 'react'
import { Form, HeroTitle } from './Styles' // Corrigindo a importação

const Hero = () => (
  <Form>
    <div className="container">
      <HeroTitle>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitle>
    </div>
  </Form>
)

export default Hero
