import { config, fields, collection, singleton } from '@keystatic/core'

export default config({
  storage: {
    kind: 'local',
  },

  collections: {
    rooms: collection({
      label: 'Rooms & Villas',
      slugField: 'name',
      path: 'src/content/rooms/*',
      format: { data: 'json' },
      schema: {
        name: fields.slug({ name: { label: 'Room Name' } }),
        price: fields.number({
          label: 'Price per Night (USD)',
          validation: { isRequired: true },
        }),
        size: fields.text({ label: 'Room Size (m²)' }),
        bed: fields.text({ label: 'Bed Type' }),
        guests: fields.text({ label: 'Max Guests' }),
        image: fields.text({ label: 'Image URL' }),
        description: fields.text({ label: 'Description', multiline: true }),
        features: fields.array(
          fields.text({ label: 'Feature' }),
          { label: 'Room Features', itemLabel: (props) => props.value }
        ),
        includes: fields.array(
          fields.text({ label: 'Item' }),
          { label: 'Package Includes', itemLabel: (props) => props.value }
        ),
        order: fields.number({ label: 'Display Order' }),
      },
    }),
  },

  singletons: {
    siteInfo: singleton({
      label: 'Site Information',
      path: 'src/content/site-info',
      format: { data: 'json' },
      schema: {
        hotelName: fields.text({ label: 'Hotel Name' }),
        tagline: fields.text({ label: 'Tagline' }),
        address: fields.text({ label: 'Address' }),
        phone: fields.text({ label: 'Phone Number' }),
        email: fields.text({ label: 'Email Address' }),
        whatsapp: fields.text({ label: 'WhatsApp Number' }),
        instagram: fields.text({ label: 'Instagram Handle' }),
        heroTitle: fields.text({ label: 'Hero Title' }),
        heroSubtitle: fields.text({ label: 'Hero Subtitle' }),
        heroImage: fields.text({ label: 'Hero Image URL' }),
      },
    }),
  },
})
