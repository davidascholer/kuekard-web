import { mount } from 'cypress/react18'
Cypress.Commands.add('mount', mount)
import MediaLoginButtonList from '../components/MediaLoginButtonList'
const facebookSelector = '[data-cy=facebook-login]'

describe('<MediaLoginButtonList>', () => {
    it('mounts', () => {
      cy.mount(<MediaLoginButtonList />)
      cy.get(facebookSelector).then((but) => {
        setTimeout(()=>{
          but.click()
        },1000)
      })
    })
  })

export{}