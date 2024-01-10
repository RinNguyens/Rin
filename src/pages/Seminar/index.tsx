import { Container, Image, Grid, Center, Group, Stack, Box, Button, Code } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { useState } from 'react';
import { IconBrandJavascript, IconShadow, IconVersions } from '@tabler/icons-react';
import code from '/code.png';
import awaitImg from '/await.png';
import promiseNew from '/promiseNew.png';
import asyncImg from '/asyncImg.png';
import starts from '/startsNew.jpg';
import fooNew from '/fooNew.jpg';

export const Seminar = () => {
    const [displayJS, setDisplayJS] = useState(false);
    const [text, setText] = useState('');
    const [prosimeStatus, setPromiseStatus] = useState(false);
    const [promiseObject, setPromiseObject] = useState(false);
    const [async, setAsnc] = useState(false);

    return (
        <Container p={0} m={0} fluid w={'100%'} h={'100%'} pt={0} px={20}>
            <Carousel height={'100%'} style={{ width: '100%' }}>
                <Carousel.Slide>
                    <Group
                        w={'100%'}
                        mt={'50'}
                        justify='center'
                        mb={50}
                    >
                        <Center maw={1300} h={100} bg="var(--mantine-color-gray-light)" p={40}>
                            <h1 className='text-center'>How JavaScript works</h1>
                        </Center>
                    </Group>
                    <Container>
                        <Center maw={1300} h={100} bg="var(--mantine-color-gray-light)" p={40}>
                            <h3>As JavaScript is getting more and more popular, teams are leveraging its support on many levels in their stack - front-end, back-end, hybrid apps, embedded devices and much more.</h3>
                        </Center>
                    </Container>
                    <Container fluid>
                        <Box>
                            <Image src={starts} />
                        </Box>
                    </Container>
                </Carousel.Slide>
                <Carousel.Slide>
                    <Group
                        w={'100%'}
                        mt={'50'}
                        justify='center'
                        mb={50}
                    >
                        <Center maw={1300} h={100} bg="var(--mantine-color-gray-light)" p={40}>
                            <h1 className='text-center'>JavaScript Engine</h1>
                        </Center>
                    </Group>
                    <Container fluid>
                        <Grid gutter={12}>
                            <Center maw={1300} h={100} bg="var(--mantine-color-gray-light)" p={40}>
                                <h3>A popular example of a JavaScript Engine is Google’s V8 engine. The V8 engine is used inside Chrome and Node.js for example. Here is a very simplified view of what it looks like:</h3>

                            </Center>
                            <Grid.Col span={6} >
                                <Image src={'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*OnH_DlbNAPvB9KLxUCyMsA.png'} />
                            </Grid.Col>
                            <Grid.Col span={6} >
                                <Box>
                                    <h1>The Engine consists of two main components:</h1>
                                    <ul>
                                        <li><h2>* Memory Heap — this is where the memory allocation happens</h2></li>
                                        <li><h2>* Call Stack — this is where your stack frames are as your code executes</h2></li>
                                    </ul>
                                </Box>

                            </Grid.Col>
                        </Grid>
                    </Container>
                </Carousel.Slide>
                <Carousel.Slide>
                    <Group
                        w={'100%'}
                        mt={'50'}
                        justify='center'
                        mb={50}
                    >
                        <Center maw={1300} h={100} bg="var(--mantine-color-gray-light)" p={40}>
                            <h1 className='text-center'>The runtime</h1>
                        </Center>
                    </Group>
                    <Container>
                        <Box style={{ backgroundColor: '#F2F3F4', padding: '10px', borderRadius: '5px' }}>
                            <h3>There are APIs in the browser that have been used by almost any JavaScript developer out there (e.g. “setTimeout”). Those APIs, however, are not provided by the Engine.</h3>
                            <h3>So, where are they coming from?</h3>
                            <h3>It turns out that the reality is a bit more complicated.</h3>
                        </Box>
                        <Grid gutter={12}>
                            <Grid.Col span={12} >
                                <Image src={'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*4lHHyfEhVB0LnQ3HlhSs8g.png'} />
                            </Grid.Col>
                        </Grid>
                    </Container>
                </Carousel.Slide>
                <Carousel.Slide>
                    <Group
                        w={'100%'}
                        mt={'50'}
                        justify='center'
                        mb={50}
                    >
                        <Center maw={1300} h={100} bg="var(--mantine-color-gray-light)" p={40}>
                            <h1 className='text-center'>Call stack</h1>
                        </Center>
                    </Group>
                    <Container>
                        <Box>
                            <Box style={{ backgroundColor: '#F2F3F4', padding: '10px', borderRadius: '5px' }}>
                                <h3>JavaScript is a single-threaded programming language, which means it has a single Call Stack. Therefore it can do one thing at a time.</h3>
                            </Box>
                        </Box>
                        <Grid gutter={12}>
                            <Grid.Col span={12} >
                                <Image src={'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*Yp1KOt_UJ47HChmS9y7KXw.png'} />
                            </Grid.Col>
                        </Grid>
                    </Container>
                </Carousel.Slide>
                <Carousel.Slide>
                    <Group
                        w={'100%'}
                        mt={'50'}
                        justify='center'
                        mb={50}
                    >
                        <Center maw={1300} h={100} bg="var(--mantine-color-gray-light)" p={40}>
                            <h1 className='text-center'>"Blocking the stack”</h1>
                        </Center>
                    </Group>
                    <Container>
                        <Box>
                            <h3>This happens when you reach the maximum Call Stack size. And that could happen quite easily, especially if you’re using recursion without testing your code very extensively. Take a look at this sample code:</h3>
                        </Box>
                        <Grid gutter={12}>
                            <Image src={fooNew} />

                            <Grid.Col span={12} >
                                <Image src={'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*AycFMDy9tlDmNoc5LXd9-g.png'} />
                            </Grid.Col>
                        </Grid>
                    </Container>
                </Carousel.Slide>
                <Carousel.Slide>
                    <Group
                        w={'100%'}
                        mt={'50'}
                        justify='center'
                        mb={50}
                    >
                        <Center maw={1300} h={100} bg="var(--mantine-color-gray-light)" p={40}>
                            <h1 className='text-center'>"Blocking the stack”</h1>
                        </Center>
                    </Group>
                    <Container>
                        <Box>
                            <h3>This happens when you reach the maximum Call Stack size. And that could happen quite easily, especially if you’re using recursion without testing your code very extensively. Take a look at this sample code:</h3>
                        </Box>
                        <Grid gutter={12}>
                            {/* <Image src={fooNew} /> */}

                            <Grid.Col span={12} >
                                <Image src={'https://images.viblo.asia/fb58ff3b-b056-4a65-be96-cf8b132f88f8.png'} />
                            </Grid.Col>
                        </Grid>
                    </Container>
                </Carousel.Slide>
                <Carousel.Slide>
                    <Group
                        w={'100%'}
                        mt={'50'}
                        justify='center'
                        mb={100}
                    >
                        <Center maw={1000} h={100} bg="var(--mantine-color-gray-light)" p={40}>
                            <h1 className='text-center'>Javascript-visualized: Promise & Async/Await & Event loop</h1>
                        </Center>
                    </Group>
                    <Grid gutter={12} h={720}>
                        <Grid.Col span={6} >
                            <h2>Event loop javascript</h2>
                            <Image src={"https://res.cloudinary.com/practicaldev/image/fetch/s--05Fi8vBq--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/42eatw03fcha0e1qcrf0.gif"} />

                        </Grid.Col>
                        <Grid.Col span={6}>
                            <h2>Promise javascript</h2>
                            <Image src={"https://dev-to-uploads.s3.amazonaws.com/i/34m9mus03v2zo9agn2bq.png"} />
                        </Grid.Col>
                    </Grid>
                </Carousel.Slide>
                {/* // 2 */}
                <Carousel.Slide>
                    <Group
                        w={'100%'}
                        mt={'50'}
                        justify='center'
                        mb={100}
                    >
                        <Center maw={800} h={100} bg="var(--mantine-color-gray-light)" p={40}>
                            <h2 className='text-center'>JAVASCRIPT : JS  <IconBrandJavascript color={displayJS ? 'orange' : 'red'} size={32} onClick={() => setDisplayJS(!displayJS)} /></h2>
                        </Center>
                    </Group>
                    <Container size={'xl'} >
                        <Grid gutter={24} >
                            <Grid.Col span={6}>
                                <h2>What is JavaScript?</h2>
                                <p>JavaScript, often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.</p>
                                <Image src="https://miro.medium.com/v2/resize:fit:1400/1*LyZcwuLWv2FArOumCxobpA.png" />
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <Image src="https://media.licdn.com/dms/image/D4D12AQF7lMBGIwHUCw/article-inline_image-shrink_1000_1488/0/1680955326122?e=1708560000&v=beta&t=_Y6QegKtIjTwKsFoT740LS226c_kWGEEjk38_bNDpDE" />
                            </Grid.Col>
                        </Grid>

                    </Container>
                    {
                        displayJS && (
                            <Stack mt={50}>
                                <iframe src="https://roadmap.sh/pdfs/roadmaps/javascript.pdf" height={'1500'} />
                            </Stack>
                        )
                    }

                </Carousel.Slide>
                {/* 3 */}
                <Carousel.Slide>
                    <Group
                        w={'100%'}
                        mt={'50'}
                        justify='center'
                        mb={20}
                    >
                        <Center maw={800} h={100} bg="var(--mantine-color-gray-light)" p={40}>
                            <h1 className='text-center'>Asynchronous JavaScript <IconBrandJavascript color={'orange'} size={32} onClick={() => setAsnc(!async)} /></h1>
                        </Center>

                    </Group>
                    {async ? <Container size={"md"}><Center maw={1000} h={200} bg="var(--mantine-color-gray-light)" p={40} mb={30}>
                        <h3 style={{ color: 'orange' }}>Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, your program is presented with the result.</h3>

                    </Center></Container> : null}
                    <Container fluid>
                        <Grid justify='center'>
                            <Grid.Col span="auto">
                                <Group justify='center'>
                                    <h2>{`ES5 : 2009 -> 2015`} <IconVersions size={30} color='orange' /></h2>
                                    <Group>
                                        <Button variant='filled' color='orange' onClick={() => setText('callbacks')}>Callbacks</Button>
                                        <Button variant='filled' color='orange' onClick={() => setText('callbackHell')}>Callback hell</Button>
                                    </Group>
                                </Group></Grid.Col>
                            <Grid.Col span={7}>
                                <Group justify='center' align='center'>
                                    {
                                        text === '' && (
                                            <Image src="https://i.pinimg.com/736x/f5/83/a8/f583a8ccbacb9da6ff24d6affb1a47e0.jpg" />
                                        )
                                    }
                                    {
                                        text === 'callbacks' && (
                                            <Box>
                                                <Center h={80} bg="var(--mantine-color-gray-light)" p={40}>
                                                    <h2 style={{ fontWeight: '800' }}>Callbacks</h2>
                                                </Center>
                                                <Center w={600} style={{ margin: 'auto' }}>
                                                    <p>A callback function is a function passed into another function as an argument,
                                                        which is then invoked inside the outer function to complete some kind of routine or action.</p>
                                                </Center>


                                                <Group justify='space-between'>
                                                    <Box>
                                                        <h3>Callback function</h3>
                                                        <Code>
                                                            <Image src="https://res.cloudinary.com/practicaldev/image/fetch/s--tVXt0XKU--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7c85x57zqotvc24jv6lc.PNG" />
                                                        </Code>
                                                    </Box>

                                                </Group>
                                            </Box>
                                        )
                                    }
                                    {
                                        text === 'callbackHell' && (
                                            <Box>
                                                <Center h={80} bg="var(--mantine-color-gray-light)" p={40}>
                                                    <h2 style={{ fontWeight: '800' }}>Callback Hell</h2>
                                                </Center>
                                                <Center w={600} style={{ margin: 'auto' }}>
                                                    <h3>The callback hell is when we try to write asynchronous JavaScript in a way where execution happens visually from top to bottom, creating a code that has a pyramid shape with many at the end.</h3>
                                                </Center>


                                                <Group justify='space-between'>
                                                    <Box>
                                                        <h3>Callback hell function</h3>
                                                        <Code>
                                                            <Image src="https://miro.medium.com/v2/resize:fit:1358/1*VH2f5KmjKwlBaEYyOmSE2g.png" />
                                                        </Code>
                                                        <Code>
                                                            <Image src="https://cdn.hashnode.com/res/hashnode/image/upload/v1604259991826/zs4DeWDTh.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" />

                                                        </Code>
                                                    </Box>

                                                </Group>
                                            </Box>
                                        )
                                    }
                                    {
                                        text === 'promise' && (
                                            <Box>
                                                <Center h={80} bg="var(--mantine-color-gray-light)" p={40}>
                                                    <h2 style={{ fontWeight: '800' }}>Promise</h2>
                                                </Center>
                                                <Center w={600} style={{ margin: 'auto' }}>
                                                    <p>The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.</p>
                                                </Center>


                                                <Group justify='space-between'>
                                                    <Box>
                                                        <h3>Asynchronous Chaining</h3>
                                                        <Code>
                                                            <Image src={code} />
                                                        </Code>
                                                        <Code>
                                                            <h3>Callback hell</h3>
                                                            <Image src="https://cdn.hashnode.com/res/hashnode/image/upload/v1604259991826/zs4DeWDTh.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" />
                                                        </Code>
                                                    </Box>

                                                </Group>
                                            </Box>
                                        )
                                    }
                                    {
                                        text === 'async' && (
                                            <Box>
                                                <Center h={80} bg="var(--mantine-color-gray-light)" p={40}>
                                                    <h2 style={{ fontWeight: '800' }}>Async / await</h2>
                                                </Center>
                                                <Center w={600} style={{ margin: 'auto' }}>
                                                    <p>There is a cleaner way to do the same thing, waiting for a function to complete its execution using the await keyword. The await() works only inside the async() function. So, we need to wrap these inside a wrapper function.</p>
                                                </Center>


                                                <Group justify='space-between'>
                                                    <Box>
                                                        <h3>Asynchronous</h3>
                                                        <Code>
                                                            <Image src={awaitImg} />
                                                        </Code>
                                                        <Code>
                                                            <h3>Promise</h3>
                                                            <Image src={code} />
                                                        </Code>
                                                        <Code>
                                                            <h3>Callback hell</h3>
                                                            <Image src="https://cdn.hashnode.com/res/hashnode/image/upload/v1604259991826/zs4DeWDTh.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" />
                                                        </Code>
                                                    </Box>

                                                </Group>
                                            </Box>
                                        )
                                    }
                                </Group>
                            </Grid.Col>
                            <Grid.Col span="auto"><Group justify='center'>
                                <h2>{`ES6 : 2015`} <IconVersions size={30} color='orange' /></h2>
                                <Group>
                                    <Button variant='filled' onClick={() => setText('promise')}>Promises</Button>
                                    <Button variant='filled' onClick={() => setText('async')}>Async / await</Button>
                                </Group>
                            </Group></Grid.Col>
                        </Grid>

                    </Container>
                </Carousel.Slide>
                {/* 4 */}
                <Carousel.Slide>
                    <Group
                        w={'100%'}
                        mt={'50'}
                        justify='center'
                        mb={100}
                    >
                        <Center maw={800} h={100} bg="var(--mantine-color-gray-light)" p={40}>
                            <h1 className='text-center'>Promise Syntax <IconBrandJavascript color={'orange'} size={32} /></h1>
                        </Center>

                    </Group>
                    <Container>
                        <Box>
                            <h2>We can create a promise, using a Promise constructor that receives a callback. Okay cool, let's try it out!</h2>
                            <Image src="https://res.cloudinary.com/practicaldev/image/fetch/s--phTVdCKA--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/79zi452hphe7ecylhozy.gif" />
                        </Box>
                        <Box my={20}>

                        </Box>
                    </Container>
                </Carousel.Slide>
                <Carousel.Slide>
                    <Group
                        w={'100%'}
                        mt={'50'}
                        justify='center'
                        mb={100}
                    >
                        <Center maw={800} h={100} bg="var(--mantine-color-gray-light)" p={40}>
                            <h1 className='text-center'>Wait woah, what just got returned? <IconBrandJavascript color={'orange'} size={32} /></h1>
                        </Center>

                    </Group>
                    <Container size={"lg"}>
                        <Box>
                            <h3>We can create a promise, using a Promise constructor that receives a callback. Okay cool, let's try it out!</h3>
                            <Image src="https://dev-to-uploads.s3.amazonaws.com/i/34m9mus03v2zo9agn2bq.png" />
                            {/* <Image src="https://res.cloudinary.com/practicaldev/image/fetch/s--9A_mOYMP--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/duen4peq0bdr55cka5ya.png" />                            */}
                        </Box>
                        <Box my={20}>

                        </Box>
                    </Container>
                </Carousel.Slide>
                <Carousel.Slide>
                    <Group
                        w={'100%'}
                        mt={'50'}
                        justify='center'
                        mb={100}
                    >
                        <Center maw={800} h={100} bg="var(--mantine-color-gray-light)" p={40}>
                            <h1 className='text-center'>Promise Status <IconBrandJavascript color={'orange'} size={32} /></h1>
                        </Center>

                    </Group>
                    <Container >
                        <Box>
                            <h3>The value of the PromiseStatus, the state, can be one of three values: <IconShadow size={16} color={prosimeStatus ? 'orange' : 'gray'} onClick={() => setPromiseStatus(!prosimeStatus)} /></h3>
                            <ul>
                                <li><a style={{ fontSize: '18px', fontWeight: '700' }}>✅ fulfilled: </a>The promise has been resolved. Everything went fine, no errors occurred within the promise.</li>
                                <li><a style={{ fontSize: '18px', fontWeight: '700' }}>❌ rejected: </a>The promise has been rejected. Argh, something went wrong...</li>
                                <li><a style={{ fontSize: '18px', fontWeight: '700' }}>⏳ pending: </a>The promise has neither resolved nor rejected (yet), the promise is still pending.</li>

                            </ul>
                            <Image src="https://res.cloudinary.com/practicaldev/image/fetch/s--9A_mOYMP--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/duen4peq0bdr55cka5ya.png" />
                        </Box>
                        {
                            prosimeStatus ? <Box my={20}>
                                <h3>Let's try and see that gets logged when we invoke either the resolve or reject method! In my example, I called the resolve method res, and the reject method rej.</h3>
                                <Image src="https://res.cloudinary.com/practicaldev/image/fetch/s--qKIq-sYt--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/z0b9v0h7aiq073l5tl2l.gif" />
                            </Box> : null
                        }

                    </Container>
                </Carousel.Slide>
                <Carousel.Slide>
                    <Group
                        w={'100%'}
                        mt={'50'}
                        justify='center'
                        mb={100}
                    >
                        <Center maw={800} h={100} bg="var(--mantine-color-gray-light)" p={40}>
                            <h1 className='text-center'>Promise object </h1>
                        </Center>

                    </Group>
                    <Container >
                        <Box>
                            <h3>To a promise, we can attach 3 methods: <IconShadow size={20} color={promiseObject ? 'orange' : 'gray'} onClick={() => setPromiseObject(!promiseObject)} /> </h3>
                            <ul>
                                <li><a style={{ fontSize: '18px', fontWeight: '700' }}>✅ .then(): </a>Gets called after a promise resolved.</li>
                                <li><a style={{ fontSize: '18px', fontWeight: '700' }}>❌ .catch(): </a>Gets called after a promise rejected.</li>
                                <li><a style={{ fontSize: '18px', fontWeight: '700' }}>finally(): </a>Always gets called, whether the promise resolved or rejected.</li>

                            </ul>
                            <Image src="https://res.cloudinary.com/practicaldev/image/fetch/s--19tIvFJQ--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/mu1aqqnyfjsfon5hwrtw.png" />
                        </Box>
                        {
                            promiseObject ? (
                                <>
                                    <Box my={20}>
                                        <h3>The .then method receives the value passed to the resolve method.</h3>
                                        <Image src="https://res.cloudinary.com/practicaldev/image/fetch/s--DZld0c-0--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/11vxhn9cun7stpjbdi80.gif" />
                                    </Box>

                                    <Box my={20}>
                                        <h3>The .catch method receives the value passed to the rejected method</h3>
                                        <Image src="https://res.cloudinary.com/practicaldev/image/fetch/s--e9SZHcPk--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/v5y24jz4u89flazvdyn4.gif" />
                                    </Box>
                                </>
                            ) : null
                        }


                    </Container>
                </Carousel.Slide>
                <Carousel.Slide>
                    <Group
                        w={'100%'}
                        mt={'50'}
                        justify='center'
                        mb={100}
                    >
                        <Center maw={800} h={100} bg="var(--mantine-color-gray-light)" p={40}>
                            <h1 className='text-center'>Example : Promise real code </h1>
                        </Center>

                    </Group>
                    <Container fluid>
                        <Grid>
                            <Grid.Col span={6}>
                                <Image src={promiseNew} />
                            </Grid.Col>
                            <Grid.Col span={6}>
                                <Image src={asyncImg} />
                            </Grid.Col>
                        </Grid>
                    </Container>
                </Carousel.Slide>
                <Carousel.Slide>
                    <Group
                        w={'100%'}
                        mt={'50'}
                        justify='center'
                        mb={100}
                    >
                        <Center maw={800} h={100} bg="var(--mantine-color-gray-light)" p={40}>
                            <h1 className='text-center'>Event loop Javascript </h1>
                        </Center>
                    </Group>
                    <Container >
                        <Box>
                            <h3>JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks. This model is quite different from models in other languages like C and Java.</h3>
                            <Image src="https://media.licdn.com/dms/image/D5612AQESI94ayNiYEQ/article-inline_image-shrink_1500_2232/0/1679071252683?e=1709769600&v=beta&t=tr2caz7lr3N-SKo9Wb8JT_MGSyFXqt0WZ8x_uGDt6Uc" />
                        </Box>
                    </Container>
                </Carousel.Slide>
                <Carousel.Slide>
                    <Group
                        w={'100%'}
                        mt={'50'}
                        justify='center'
                        mb={100}
                    >
                        <Center maw={800} h={100} bg="var(--mantine-color-gray-light)" p={40}>
                            <h1 className='text-center'>Visualized Event loop </h1>
                        </Center>

                    </Group>
                    <Container >
                        <Box>

                        </Box>
                        <Box my={20} >
                        <Box style={{ backgroundColor: '#F2F3F4', padding: '10px', borderRadius: '5px' }}>
                                <h3>However, within the Event Loop, there are actually two types of queues:</h3>
                                <p> - The microtask queue is for microtasks. </p>
                                <p> - The (macro)task queue is for macrotasks.</p>
                                <hr />
                                <p>STACK : Last In, First Out (LIFO)</p>
                                <p>QUEUE : tasks enqueued first are run first. (FIFO)</p>

                            </Box>
                            <Image src={"https://res.cloudinary.com/practicaldev/image/fetch/s--05Fi8vBq--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/42eatw03fcha0e1qcrf0.gif"} />
                        </Box>
                    </Container>
                </Carousel.Slide>
                <Carousel.Slide>
                    <Group
                        w={'100%'}
                        mt={'50'}
                        justify='center'
                        mb={100}
                    >
                        <Center maw={800} h={100} bg="var(--mantine-color-gray-light)" p={40}>
                            <h1 className='text-center'>Visualized Event loop </h1>
                        </Center>

                    </Group>
                    <Container >
                        <Box>

                        </Box>
                        <Box my={20} >
                            <Box p={10} >
                                <h2>Let's use it with some real code!</h2>
                            </Box>
                            <Image src={"https://res.cloudinary.com/practicaldev/image/fetch/s--fnbqqf1d--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/g61wwyi8wchk2hpzeq4u.png"} />
                        </Box>
                    </Container>
                </Carousel.Slide>
                <Carousel.Slide>
                    <Group
                        w={'100%'}
                        mt={'50'}
                        justify='center'
                        mb={100}
                    >
                        <Center maw={800} h={100} bg="var(--mantine-color-gray-light)" p={40}>
                            <h1 className='text-center'>Visualized Event loop </h1>
                        </Center>

                    </Group>
                    <Container >
                        <Box>

                        </Box>
                        <Box my={20} >
                            <Box p={10} >
                                <h2>Let's use it with some real code!</h2>
                            </Box>
                            <Image src={"https://res.cloudinary.com/practicaldev/image/fetch/s---Bt6DKsn--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/6cbjuexvy6z9ltk0bi18.gif"} />
                        </Box>
                        
                    </Container>
                </Carousel.Slide>
                <Carousel.Slide>
                    <Group
                        w={'100%'}
                        mt={'50'}
                        justify='center'
                        mb={100}
                    >
                        <Center maw={800} h={100} bg="var(--mantine-color-gray-light)" p={40}>
                            <h1 className='text-center'>Visualized Event loop </h1>
                        </Center>

                    </Group>
                    <Container >
                        <Box>

                        </Box>
                        <Box my={20} >
                            <Box p={10} >
                                <h2>Let's use it with some real code!</h2>
                            </Box>
                            <Image src={"https://res.cloudinary.com/practicaldev/image/fetch/s--6NSYq-nO--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/yqoemb6f32lvovge8yrp.gif"} />
                        </Box>
                    </Container>
                </Carousel.Slide>
                <Carousel.Slide>
                    <Group
                        w={'100%'}
                        mt={'50'}
                        justify='center'
                        mb={100}
                    >
                        <Center maw={800} h={100} bg="var(--mantine-color-gray-light)" p={40}>
                            <h1 className='text-center'>Visualized Event loop </h1>
                        </Center>

                    </Group>
                    <Container >
                        <Box>

                        </Box>
                        <Box my={20} >
                            <Box p={10} >
                                <h2>Let's use it with some real code!</h2>
                            </Box>
                            <Image src={"https://res.cloudinary.com/practicaldev/image/fetch/s--us8FF30N--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/6wxjxduh62fqt531e2rc.gif"} />
                        </Box>
                    </Container>
                </Carousel.Slide>
                <Carousel.Slide>
                    <Group
                        w={'100%'}
                        mt={'50'}
                        justify='center'
                        mb={100}
                    >
                        <Center maw={800} h={100} bg="var(--mantine-color-gray-light)" p={40}>
                            <h1 className='text-center'>Visualized Event loop </h1>
                        </Center>

                    </Group>
                    <Container >
                        <Box>

                        </Box>
                        <Box my={20} >
                            <Box p={10} >
                                <h2>Let's use it with some real code!</h2>
                            </Box>
                            <Image src={"https://res.cloudinary.com/practicaldev/image/fetch/s--oOS_-CiG--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/a6jk0exl137yka3oq9k4.gif"} />
                        </Box>
                    </Container>
                </Carousel.Slide>
                <Carousel.Slide>
                    <Group
                        w={'100%'}
                        mt={'50'}
                        justify='center'
                        mb={100}
                    >
                        <Center maw={800} h={100} bg="var(--mantine-color-gray-light)" p={40}>
                            <h1 className='text-center'>Visualized Event loop </h1>
                        </Center>

                    </Group>
                    <Container >
                        <Box>

                        </Box>
                        <Box my={20} >
                            <Box p={10} >
                                <h2>Let's use it with some real code!</h2>
                            </Box>
                            <Image src={"https://res.cloudinary.com/practicaldev/image/fetch/s--5iH5BNWm--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/lczn4fca41is4vpicr6w.gif"} />
                        </Box>
                    </Container>
                </Carousel.Slide>
                
                <Carousel.Slide>
                    <Group
                        w={'100%'}
                        mt={'50'}
                        justify='center'
                        mb={100}
                    >
                        <Center maw={800} h={100} bg="var(--mantine-color-gray-light)" p={40}>
                            <h1 className='text-center'>Visualized Event loop </h1>
                        </Center>

                    </Group>
                    <Container >
                        <Box>

                        </Box>
                        <Box my={20} >
                            <Box p={10} >
                                <h2>Let's use it with some real code!</h2>
                            </Box>
                            <Image src={"https://res.cloudinary.com/practicaldev/image/fetch/s--hPFPTZp2--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/p54casaaz9oq0g8ztpi5.gif"} />
                        </Box>
                    </Container>
                </Carousel.Slide>
                <Carousel.Slide>
                    <Group
                        w={'100%'}
                        mt={'50'}
                        justify='center'
                    >
                        <Center maw={800} h={100} bg="var(--mantine-color-gray-light)" p={40}>
                            <h1 className='text-center'>Conclusion </h1>
                        </Center>

                    </Group>
                    <Container >
                        <Center my={20} >
                            <Image style={{width: '80%'}} src={'https://res.cloudinary.com/practicaldev/image/fetch/s--W00Fex7D--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/spkr1vcojuaf9ho0yy06.png'} />
                        </Center>
                    </Container>
                </Carousel.Slide>
                <Carousel.Slide>
                    <Group
                        w={'100%'}
                        mt={'50'}
                        justify='center'
                        mb={30}
                    >
                        <Center maw={800} h={100} bg="var(--mantine-color-gray-light)" p={40}>
                            <h1 className='text-center'>Summary</h1>
                        </Center>

                    </Group>
                    <Container>
                        <Group m={10}>
                            <Box>
                                <h3>A more detailed event loop algorithm (though still simplified compared to the specification):</h3>
                                <p style={{ fontSize: '20px' }}>
                                    <ol>
                                        <li>Dequeue and run the oldest task from the macrotask queue (e.g. “script”).</li>
                                        <li>Execute all microtasks:
                                            <ul>
                                                <li>While the microtask queue is not empty:</li>
                                                <ul>
                                                    <li>Dequeue and run the oldest microtask.</li>
                                                </ul>
                                            </ul>
                                        </li>
                                        <li>Render changes if any.</li>
                                        <li>If the macrotask queue is empty, wait till a macrotask appears.</li>
                                        <li>Go to step 1.</li>
                                    </ol>
                                </p>
                            </Box>
                        </Group>
                        <hr />
                        <Group m={10}>
                            <Box>
                                <table>
                                    <tbody><tr>
                                        <td>
                                            (Macro)task
                                        </td>
                                        <td>
                                            <code>setTimeout</code> | <code>setInterval</code> | <code>setImmediate</code> | <code>requestAnimationFrame</code> | <code>I/O</code>
                                        </td>
                                    </tr>
                                        <tr>
                                            <td>
                                                Microtask
                                            </td>
                                            <td>
                                                <code>process.nextTick</code> | <code>Promise callback</code> | <code>queueMicrotask</code>
                                            </td>
                                        </tr>
                                    </tbody></table>
                            </Box>
                        </Group>
                        <Group m={10}>
                            <Box>
                                <h3>The event loop gives a different priority to the tasks:</h3>
                                <p style={{ fontSize: '20px' }}>
                                    <ol>
                                        <li>All functions in that are currently in the call stack get executed. When they returned a value, they get popped off the stack.</li>
                                        <li>When the call stack is empty, all queued up microtasks are popped onto the callstack one by one, and get executed! (Microtasks themselves can also return new microtasks, effectively creating an infinite microtask loop 😬)</li>
                                        <li>If both the call stack and microtask queue are empty, the event loop checks if there are tasks left on the (macro)task queue. The tasks get popped onto the callstack, executed, and popped off!
                                        </li>
                                    </ol>
                                </p>
                            </Box>
                        </Group>
                    </Container>
                </Carousel.Slide>
            </Carousel>
        </Container>
    );
}

