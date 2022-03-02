import * as React from "react"
import styled from "styled-components"

import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"

const navigationQuery = graphql`
  {
    allPrismicNavigation {
      edges {
        node {
          data {
            brand
            navigation_links {
              label
              link {
                uid
              }
            }
          }
        }
      }
    }
  }
`

const Header = ({ siteTitle }) => (
  <>
    <StaticQuery
      query={`${navigationQuery}`}
      render={data => {
        return (
          <HeadWrapper>
            <Branding>
              <Link to="/">
                {data.allPrismicNavigation.edges[0].node.data.brand}
              </Link>
            </Branding>
            <NavLinks className="navbar navbar-expand-lg navbar-light bg-light pt-10 pb-10">
              {data.allPrismicNavigation.edges[0].node.data.navigation_links.map(
                link => {
                  // console.log('link',link)
                  return (
                    <NavLink key={link.link.uid}>
                      <Link to={`/${link.link.uid}`}>{link.label}</Link>
                    </NavLink>
                  )
                }
              )}
            </NavLinks>
          </HeadWrapper>
        )
      }}
    />
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

// const HeaderWrapper = styled.header`
//   padding: 40px;
//   display: flex;
//   justify-content: space-between;

//   .site-title {
//     font-weight: bold;
//     color: #014c40;
//   }

//   a {
//     text-decoration: none;
//     color: black;
//     font-size: 15px;
//     font-weight: normal;
//     text-transform: uppercase;
//     font-family: BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
//     "Open Sans", "Helvetica Neue", sans-serif;

//     :hover {
//       text-decoration: underline;
//     }
//   }
// `
// const LinksWrapper = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, auto);
//   gap: 40px;
// `
const HeadWrapper = styled.div`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
`

const NavLinks = styled.div`
  margin-left: auto;
  display: flex;
`
const NavLink = styled.div`
  margin: auto 0;

  a {
    color: #014c40;
    padding: 0 16px;
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;
    &:hover {
      color: orange;
    }
  }
`
const Branding = styled.div`
  color: orange;
  font-weight: bold;
  margin: auto 0;
  font-size: 20px;
`
