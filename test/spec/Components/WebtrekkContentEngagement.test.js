import React from 'react';
import { shallow, mount } from './../../enzyme';
import { expectInCallback } from './../../helper';
import { WebtrekkContentEngagement, WebtrekkSmartPixelReact } from './../../../lib/index';

describe('WebtrekkContentEngagement', () => {
    let renderedWebtrekkContentEngagement;
    let spyOnError;
    let spyOnAddContentEngagementElement;

    describe('shallow rendering', () => {
        beforeEach(() => {
            spyOnError = jest.spyOn(console, 'error').mockImplementation(() => {});
            renderedWebtrekkContentEngagement = shallow(
                <WebtrekkContentEngagement>
                    <div style={ {height: '100px', width: '100px', border: 'solid 1px black'} }></div>
                </WebtrekkContentEngagement>,
                {
                    wrappingComponent: WebtrekkContentEngagement
                }
            );
        });

        afterEach(() => {
            spyOnError.mockRestore();

            spyOnError = null;
            spyOnAddContentEngagementElement = null;
            renderedWebtrekkContentEngagement = null;
        });

        test('default props', () => {
            const props = renderedWebtrekkContentEngagement.getWrappingComponent().props().children.props;
            expect(props.selector).toBe(null);
            expect(props.name).toBe(null);
            expect(props.percentageStepsInAnalytics).toBe(null);
            expect(props.sendContentEngagement).toBe(null);
            expect(props.percentageReached).toBe(null);
            expect(props.secondsReached).toBe(null);
            expect(props.largeBrowserResolution).toBe(null);
            expect(props.largeBrowserSeconds).toBe(null);
            expect(props.mediumBrowserResolution).toBe(null);
            expect(props.mediumBrowserSeconds).toBe(null);
            expect(props.smallBrowserResolution).toBe(null);
            expect(props.smallBrowserSeconds).toBe(null);
        });

        test('define props', () => {
            renderedWebtrekkContentEngagement = shallow(
                <WebtrekkContentEngagement
                    selector='selector'
                    name='name'
                    percentageStepsInAnalytics={ 0 }
                    sendContentEngagement={ 0 }
                    percentageReached={ 0 }
                    secondsReached={ 0 }
                    largeBrowserResolution={ 0 }
                    largeBrowserSeconds={ 0 }
                    mediumBrowserResolution={ 0 }
                    mediumBrowserSeconds={ 0 }
                    smallBrowserResolution={ 0 }
                    smallBrowserSeconds={ 0 }
                >
                    <div style={ {height: '100px', width: '100px', border: 'solid 1px black'} }></div>
                </WebtrekkContentEngagement>,
                {
                    wrappingComponent: WebtrekkContentEngagement
                }
            );

            const props = renderedWebtrekkContentEngagement.getWrappingComponent().props().children.props;
            expect(props.selector).toBe('selector');
            expect(props.name).toBe('name');
            expect(props.percentageStepsInAnalytics).toBe(0);
            expect(props.sendContentEngagement).toBe(0);
            expect(props.percentageReached).toBe(0);
            expect(props.secondsReached).toBe(0);
            expect(props.largeBrowserResolution).toBe(0);
            expect(props.largeBrowserSeconds).toBe(0);
            expect(props.mediumBrowserResolution).toBe(0);
            expect(props.mediumBrowserSeconds).toBe(0);
            expect(props.smallBrowserResolution).toBe(0);
            expect(props.smallBrowserSeconds).toBe(0);
        });

        test('ignore wrong type', () => {
            renderedWebtrekkContentEngagement = shallow(
                <WebtrekkContentEngagement
                    percentageStepsInAnalytics={ false }
                    sendContentEngagement={ true }
                    percentageReached={ false }
                    secondsReached={ false }
                    largeBrowserResolution={ false }
                    largeBrowserSeconds={ false }
                    mediumBrowserResolution={ true }
                    mediumBrowserSeconds={ true }
                    smallBrowserResolution={ true }
                    smallBrowserSeconds={ true }
                >
                    <div style={ {height: '100px', width: '100px', border: 'solid 1px black'} }></div>
                </WebtrekkContentEngagement>,
                {
                    wrappingComponent: WebtrekkContentEngagement
                }
            );

            expect(spyOnError).toHaveBeenCalled();
            expect(spyOnError.mock.calls.length).toBe(10);

            expect(spyOnError.mock.calls[0][0]).toContain('Invalid prop `percentageStepsInAnalytics` of type `boolean` supplied to `WebtrekkContentEngagement`, expected `number`.');
            expect(spyOnError.mock.calls[1][0]).toContain('Invalid prop `sendContentEngagement` of value `true` supplied to `WebtrekkContentEngagement`, expected one of [0,1,2].');
            expect(spyOnError.mock.calls[2][0]).toContain('Invalid prop `percentageReached` of type `boolean` supplied to `WebtrekkContentEngagement`, expected `number`.');
            expect(spyOnError.mock.calls[3][0]).toContain('Invalid prop `secondsReached` of type `boolean` supplied to `WebtrekkContentEngagement`, expected `number`.');
            expect(spyOnError.mock.calls[4][0]).toContain('Invalid prop `largeBrowserResolution` of type `boolean` supplied to `WebtrekkContentEngagement`, expected `number`.');
            expect(spyOnError.mock.calls[5][0]).toContain('Invalid prop `largeBrowserSeconds` of type `boolean` supplied to `WebtrekkContentEngagement`, expected `number`.');
            expect(spyOnError.mock.calls[6][0]).toContain('Invalid prop `mediumBrowserResolution` of type `boolean` supplied to `WebtrekkContentEngagement`, expected `number`.');
            expect(spyOnError.mock.calls[7][0]).toContain('Invalid prop `mediumBrowserSeconds` of type `boolean` supplied to `WebtrekkContentEngagement`, expected `number`.');
            expect(spyOnError.mock.calls[8][0]).toContain('Invalid prop `smallBrowserResolution` of type `boolean` supplied to `WebtrekkContentEngagement`, expected `number`.');
            expect(spyOnError.mock.calls[9][0]).toContain('Invalid prop `smallBrowserSeconds` of type `boolean` supplied to `WebtrekkContentEngagement`, expected `number`.');
        });

        test('create an element', () => {
            expect(renderedWebtrekkContentEngagement.type()).toBe('div');
        });

        test('check element via snapshot', () => {
            expect(renderedWebtrekkContentEngagement.debug()).toMatchSnapshot();
        });
    });

    describe('full rendering', () => {
        beforeEach((done) => {
            WebtrekkSmartPixelReact.call((wtSmart) => {
                spyOnError = jest.spyOn(console, 'error').mockImplementation(() => {});
                spyOnAddContentEngagementElement = jest.spyOn(wtSmart.extension.content_engagement, 'add').mockImplementation(() => {});

                renderedWebtrekkContentEngagement = mount(
                    <WebtrekkContentEngagement>
                        <div style={ {height: '100px', width: '100px', border: 'solid 1px black'} }></div>
                    </WebtrekkContentEngagement>,
                    {
                        wrappingComponent: WebtrekkContentEngagement
                    }
                );

                done();
            });
        });

        afterEach((done) => {
            WebtrekkSmartPixelReact.call((wtSmart) => {
                wtSmart.extension.content_engagement.deactivate();

                spyOnError.mockRestore();
                spyOnAddContentEngagementElement.mockRestore();

                spyOnError = null;
                spyOnAddContentEngagementElement = null;
                renderedWebtrekkContentEngagement = null;

                done();
            });
        });

        test('is activated', (done) => {
            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    expect(spyOnAddContentEngagementElement.mock.calls.length).toBe(2);
                    expect(wtSmart.extension.content_engagement.isActivated()).toBe(true);
                }, done);
            });
        });

        test('is updated', (done) => {
            renderedWebtrekkContentEngagement.setProps();
            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    expect(spyOnAddContentEngagementElement.mock.calls.length).toBe(4);
                    expect(wtSmart.extension.content_engagement.isActivated()).toBe(true);
                }, done);
            });
        });

        test('add element with default config', (done) => {
            WebtrekkSmartPixelReact.call(() => {
                expectInCallback(() => {
                    const data = spyOnAddContentEngagementElement.mock.calls[0][0];
                    expect(data.selector instanceof HTMLDivElement).toBe(true);
                    expect(data.name).toBe(null);
                    expect(data.config.percentageStepsInAnalytics).toBe(null);
                    expect(data.config.sendContentEngagement).toBe(null);
                    expect(data.config.percentageReached).toBe(null);
                    expect(data.config.secondsReached).toBe(null);
                    expect(data.config.largeBrowserResolution).toBe(null);
                    expect(data.config.largeBrowserSeconds).toBe(null);
                    expect(data.config.mediumBrowserResolution).toBe(null);
                    expect(data.config.mediumBrowserSeconds).toBe(null);
                    expect(data.config.smallBrowserResolution).toBe(null);
                    expect(data.config.smallBrowserSeconds).toBe(null);
                }, done);
            });
        });

        test('add element with config - 1', (done) => {
            renderedWebtrekkContentEngagement = mount(
                <WebtrekkContentEngagement
                    name='name of the content engangement element'
                    percentageStepsInAnalytics={ 5 }
                    sendContentEngagement={ 2 }
                    percentageReached={ 20 }
                    secondsReached={ 30 }
                    largeBrowserResolution={ 1080 }
                    largeBrowserSeconds={ 20 }
                    mediumBrowserResolution={ 700 }
                    mediumBrowserSeconds={ 10 }
                    smallBrowserResolution={ 400 }
                    smallBrowserSeconds={ 5 }
                >
                    <div style={ {height: '100px', width: '100px', border: 'solid 1px black'} }></div>
                </WebtrekkContentEngagement>,
                {
                    wrappingComponent: WebtrekkContentEngagement
                }
            );

            WebtrekkSmartPixelReact.call(() => {
                expectInCallback(() => {
                    const data = spyOnAddContentEngagementElement.mock.calls[2][0];
                    expect(data.selector instanceof HTMLDivElement).toBe(true);
                    expect(data.name).toBe('name of the content engangement element');
                    expect(data.config.percentageStepsInAnalytics).toBe(5);
                    expect(data.config.sendContentEngagement).toBe(2);
                    expect(data.config.percentageReached).toBe(20);
                    expect(data.config.secondsReached).toBe(30);
                    expect(data.config.largeBrowserResolution).toBe(1080);
                    expect(data.config.largeBrowserSeconds).toBe(20);
                    expect(data.config.mediumBrowserResolution).toBe(700);
                    expect(data.config.mediumBrowserSeconds).toBe(10);
                    expect(data.config.smallBrowserResolution).toBe(400);
                    expect(data.config.smallBrowserSeconds).toBe(5);
                }, done);
            });
        });

        test('add element with config - 2', (done) => {
            renderedWebtrekkContentEngagement = mount(
                <WebtrekkContentEngagement
                    selector='#ce1'
                    name='name of the content engangement element'
                    percentageStepsInAnalytics={ 10 }
                    sendContentEngagement={ 1 }
                    percentageReached={ 25 }
                    secondsReached={ 30 }
                    largeBrowserResolution={ 1080 }
                    largeBrowserSeconds={ 20 }
                    mediumBrowserResolution={ 700 }
                    mediumBrowserSeconds={ 10 }
                    smallBrowserResolution={ 400 }
                    smallBrowserSeconds={ 5 }
                >
                    <div id='ce1' style={ {height: '100px', width: '100px', border: 'solid 1px black'} }></div>
                </WebtrekkContentEngagement>,
                {
                    wrappingComponent: WebtrekkContentEngagement
                }
            );

            WebtrekkSmartPixelReact.call(() => {
                expectInCallback(() => {
                    const data = spyOnAddContentEngagementElement.mock.calls[2][0];
                    expect(data.selector).toBe('#ce1');
                    expect(data.name).toBe('name of the content engangement element');
                    expect(data.config.percentageStepsInAnalytics).toBe(10);
                    expect(data.config.sendContentEngagement).toBe(1);
                    expect(data.config.percentageReached).toBe(25);
                    expect(data.config.secondsReached).toBe(30);
                    expect(data.config.largeBrowserResolution).toBe(1080);
                    expect(data.config.largeBrowserSeconds).toBe(20);
                    expect(data.config.mediumBrowserResolution).toBe(700);
                    expect(data.config.mediumBrowserSeconds).toBe(10);
                    expect(data.config.smallBrowserResolution).toBe(400);
                    expect(data.config.smallBrowserSeconds).toBe(5);
                }, done);
            });
        });
    });
});
