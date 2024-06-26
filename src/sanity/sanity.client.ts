import { createClient, type ClientConfig } from '@sanity/client'

const config: ClientConfig = {
    projectId: 'lo9z4wi6',
    dataset: 'production',
    apiVersion: '2021-08-31',
    useCdn: false, // if production set to true
}

const client = createClient(config)

export default client
