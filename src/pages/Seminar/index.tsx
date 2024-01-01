import { Container, Image, Grid, Center, Group, Stack, Box, Button, Code } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { useState } from 'react';
import { IconBrandJavascript, IconVersions } from '@tabler/icons-react';
export const Seminar = () => {
    const [displayJS, setDisplayJS] = useState(false);
    const [text, setText] = useState('');
    return (
        <Container p={0} m={0} fluid w={'100%'} h={'100%'} pt={70} px={20}>
            <Carousel height={'100%'} style={{ width: '100%' }}>
                <Carousel.Slide>
                    <Group
                        w={'100%'}
                        mt={'50'}
                        justify='center'
                        mb={100}
                    >
                        <Center maw={800} h={100} bg="var(--mantine-color-gray-light)" p={40}>
                            <h2 className='text-center'>Javascript-visualized: Promise & Async/Await & Event loop</h2>
                        </Center>
                    </Group>
                    <Grid gutter={12} h={720}>
                        <Grid.Col span={6} >
                            <h3>Event loop javascript</h3>
                            <Image src={"https://res.cloudinary.com/practicaldev/image/fetch/s---a_4f2_K--/c_imagga_scale,f_auto,fl_progressive,h_900,q_66,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/k2l36khs41oncfwmy3wk.gif"} />

                        </Grid.Col>
                        <Grid.Col span={6}>
                            <h3>Promise javascript</h3>
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
                        mb={100}
                    >
                        <Center maw={800} h={100} bg="var(--mantine-color-gray-light)" p={40}>
                            <h1 className='text-center'>Promise  <IconBrandJavascript color={'orange'} size={32} /></h1>
                        </Center>
                    </Group>
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
                                                    <p>The callback hell is when we try to write asynchronous JavaScript in a way where execution happens visually from top to bottom, creating a code that has a pyramid shape with many at the end.</p>
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
            </Carousel>
        </Container>
    );
}

