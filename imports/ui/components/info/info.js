import './info.html';
import { Links } from '/imports/api/links/links.js'

Template.info.helpers({
  links() {
    return Links.find({});
  },
});
