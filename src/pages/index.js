import * as React from "react"
import { navigate } from "gatsby-link"
import styled from "styled-components"

import Layout from "../components/layout"
import PrimaryButton from "../components/PrimaryButton"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <ContentWrapper>
      <BannerImage src="//cdn.shopify.com/s/files/1/0306/4441/files/header.jpg?v=1643866033" />
      <TextWrapper>
       <PrimaryButton text="Explore all products" onClick={() => navigate('products')} />
      </TextWrapper>
    </ContentWrapper>
  </Layout>
)

export default IndexPage

const ContentWrapper = styled.div`
  position: relative;
`

const BannerImage = styled.img`
  height: 500px;
  width: 100%;
  object-fit: cover;
  margin: 0;
`

const TextWrapper = styled.div`
  position: absolute;
  bottom: 40px;
  left: 40px;
  display: grid;
  gap: 10px;
`

