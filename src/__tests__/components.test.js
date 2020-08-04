import React from 'react';
import renderer from 'react-test-renderer';
import App from "../containers/App";

describe('components', function() {
    describe('<App />', function() {
        it('renders correctly', function() {
            var tree = renderer.create(<App />).toJSON();
            //expect(tree).toMatchSnapshot();
          });
    });
  });

