export default function() {
  this.namespace = '/api';
  this.get('/cats', function() {
    return {
      data: [{
        type: 'cat',
        id: 'cat001',
        attributes: {
          name: 'Gato Enrollado',
          city: 'Medellín',
          type: 'Gato',
          image: 'data:image/jpeg;base64,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'
        }
      }, {
        type: 'cat',
        id: 'cat002',
        attributes: {
          name: 'Wild',
          city: 'Bogotá',
          type: 'Gato',
          image: 'data:image/jpeg;base64,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'
        }
      }, {
        type: 'cat',
        id: 'cat003',
        attributes: {
          name: 'Army',
          city: 'Valle',
          type: 'Gato',
          image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcROK723ru1FrNl8bV6pZuVJq4V5evxglOVkxHVyYFTElbSgm9Pw'
        }
      }]
    };
  });

  // Find and return the provided spy from our spy list above
 
}