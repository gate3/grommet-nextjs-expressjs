import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import grommetStyle from 'grommet/scss/vanilla/index.scss';
import App from 'grommet/components/App';
import Head from 'next/head';
import Box from 'grommet/components/Box';
import Title from 'grommet/components/Title';
import Header from 'grommet/components/Header';
import Search from 'grommet/components/Search';
import Button from 'grommet/components/Button';
// or, if you work with plain css
// import stylesheet from 'styles/index.css'

export default () =>
  <div>
     <Head>
      <title>VeluxCare Do</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <style dangerouslySetInnerHTML={{ __html: grommetStyle }} />
    <App centered={false}>
        <Header>
          <Title>
            Sample Title
          </Title>
          <Box flex={true}
            justify='end'
            direction='row'
            responsive={false}>
            <Search inline={true}
              fill={true}
              size='medium'
              placeHolder='Search'
              dropAlign={{"right": "right"}} />
            
          </Box>
        </Header>
        <Box direction='row'
          justify='start'
          align='center'
          wrap={true}
          pad='medium'
          margin='small'
          colorIndex='light-2'>
          
          <Button label='Label'
          href='#'
          primary={true} />

        </Box>
    </App>
  </div>
