const pathLib = require('path')



// Reminder: this isn't a great example file currently. It needs to be cleaned up and documented.
// But I figured it's better to capture what I've got now in case I lose the config.js file,
// rather than try to recreate it from the code.




module.exports = {
  version: '0.1.0',
  sources: {
    aborBridgeInteractive: {
      clientId: '',
      clientSecret: '',
      accessToken: '',
      metadataEndpoint: 'https://api.bridgedataoutput.com/api/v2/OData/actris_ref/$metadata',
      // metadataPath is for debugging only. It can be used when you want to read from it instead of the internet.
      // metadataPath: pathLib.resolve(__dirname, 'sources/abor_bridge_interactive/actris_ref_metadata.xml'),
      getReplicationEndpoint: mlsResourceName => {
        return 'https://api.bridgedataoutput.com/api/v2/OData/actris_ref/{resource}/replication'
      },
      getPurgeEndpoint: mlsResourceName => {
        return 'https://api.bridgedataoutput.com/api/v2/OData/actris_ref/{resource}/replication'
      },
      top: 2000,
      useOrderBy: false,
      destinations: [
        {
          name: 'mysql1',
          type: 'mysql',
          config: {
            connectionString: 'mysql://user1:password1@localhost:33033/mymls',

            // makeTableName: name => 'mytable' + name,
            // makeFieldName: name => 'myfield' + name,
          },
        },
        {
          name: 'devnull1',
          type: 'devnull',
        },
      ],
      // Reminder: The Property resource includes Media unless you use $unselect.
      // mlsResources: ['Property', 'Media'],
    },
  },
  server: {
    // port: 4000,
  },
}
