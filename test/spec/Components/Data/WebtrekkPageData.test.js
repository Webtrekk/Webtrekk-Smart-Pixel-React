import React from 'react';
import { shallow, mount } from './../../../enzyme';
import { expectInCallback } from './../../../helper';
import { WebtrekkPageData, WebtrekkSmartPixelReact } from './../../../../lib/index';

describe('WebtrekkPageData', () => {
    let spyOnError;
    let renderedWebtrekkPageData;

    describe('shallow rendering', () => {
        beforeEach(() => {
            spyOnError = jest.spyOn(console, 'error').mockImplementation(() => {});
        });

        afterEach(() => {
            spyOnError.mockRestore();

            spyOnError = null;
        });

        test('ignore wrong type', () => {
            shallow(
                <WebtrekkPageData
                    name={ 1 }
                    search={ 1 }
                    numberSearchResults='7'
                    errorMessages={ 1 }
                    paywall={ 1 }
                    articleTitle={ 1 }
                    contentTags={ 1 }
                    title={ 1 }
                    type={ 1 }
                    length={ 1 }
                    daysSincePublication='12'
                    testVariant={ 1 }
                    testExperiment={ 1 }
                    parameter={ {1: 'parameter', 2: 2} }
                    category={ {1: 'category', 3: 3} }
                    goal={ {1: 'goal', 4: 4} }
                />
            );

            expect(spyOnError).toHaveBeenCalled();
            expect(spyOnError.mock.calls.length).toBe(16);

            expect(spyOnError.mock.calls[0][0]).toContain('Invalid prop `name` of type `number` supplied to `WebtrekkPageData`, expected `string`.');
            expect(spyOnError.mock.calls[1][0]).toContain('Invalid prop `search` of type `number` supplied to `WebtrekkPageData`, expected `string`.');
            expect(spyOnError.mock.calls[2][0]).toContain('Invalid prop `numberSearchResults` of type `string` supplied to `WebtrekkPageData`, expected `number`.');
            expect(spyOnError.mock.calls[3][0]).toContain('Invalid prop `errorMessages` of type `number` supplied to `WebtrekkPageData`, expected `string`.');
            expect(spyOnError.mock.calls[4][0]).toContain('Invalid prop `paywall` of type `number` supplied to `WebtrekkPageData`, expected `boolean`.');
            expect(spyOnError.mock.calls[5][0]).toContain('Invalid prop `articleTitle` of type `number` supplied to `WebtrekkPageData`, expected `string`.');
            expect(spyOnError.mock.calls[6][0]).toContain('Invalid prop `contentTags` of type `number` supplied to `WebtrekkPageData`, expected `string`.');
            expect(spyOnError.mock.calls[7][0]).toContain('Invalid prop `title` of type `number` supplied to `WebtrekkPageData`, expected `string`.');
            expect(spyOnError.mock.calls[8][0]).toContain('Invalid prop `type` of type `number` supplied to `WebtrekkPageData`, expected `string`.');
            expect(spyOnError.mock.calls[9][0]).toContain('Invalid prop `length` of type `number` supplied to `WebtrekkPageData`, expected `string`.');
            expect(spyOnError.mock.calls[10][0]).toContain('Invalid prop `daysSincePublication` of type `string` supplied to `WebtrekkPageData`, expected `number`.');
            expect(spyOnError.mock.calls[11][0]).toContain('Invalid prop `testVariant` of type `number` supplied to `WebtrekkPageData`, expected `string`.');
            expect(spyOnError.mock.calls[12][0]).toContain('Invalid prop `testExperiment` of type `number` supplied to `WebtrekkPageData`, expected `string`.');
            expect(spyOnError.mock.calls[13][0]).toContain('Invalid prop `parameter.2` of type `number` supplied to `WebtrekkPageData`, expected `string`.');
            expect(spyOnError.mock.calls[14][0]).toContain('Invalid prop `category.3` of type `number` supplied to `WebtrekkPageData`, expected `string`.');
            expect(spyOnError.mock.calls[15][0]).toContain('Invalid prop `goal.4` of type `number` supplied to `WebtrekkPageData`, expected `string`.');
        });

        test('don\'t returns children', () => {
            const renderedWebtrekkPageData = shallow(<WebtrekkPageData />);
            expect(renderedWebtrekkPageData).toEqual({});
        });
    });

    describe('full rendering', () => {
        beforeEach((done) => {
            WebtrekkSmartPixelReact.call(() => {
                spyOnError = jest.spyOn(console, 'error').mockImplementation(() => {});
                done();
            });
        });

        afterEach((done) => {
            WebtrekkSmartPixelReact.call((wtSmart) => {
                wtSmart.page.data.remove();

                spyOnError.mockRestore();
                spyOnError = null;

                done();
            });
        });

        test('mount init', (done) => {
            mount(<WebtrekkPageData
                name='name'
                search='search'
                numberSearchResults={ 7 }
                errorMessages='errorMessages'
                paywall={ true }
                articleTitle='articleTitle'
                contentTags='contentTags'
                title='title'
                type='type'
                length='length'
                daysSincePublication={ 12 }
                testVariant='testVariant'
                testExperiment='testExperiment'
                parameter={ {1: 'parameter foo', 2: 'parameter bar'} }
                category={ {1: 'category foo', 3: 'category bar'} }
                goal={ {1: 'goal foo', 4: 'goal bar'} }
            />);

            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    const pageData = wtSmart.page.data.get();
                    expect(pageData.name).toBe('name');
                    expect(pageData.search).toBe('search');
                    expect(pageData.numberSearchResults).toBe(7);
                    expect(pageData.errorMessages).toBe('errorMessages');
                    expect(pageData.paywall).toBe(true);
                    expect(pageData.articleTitle).toBe('articleTitle');
                    expect(pageData.contentTags).toBe('contentTags');
                    expect(pageData.title).toBe('title');
                    expect(pageData.type).toBe('type');
                    expect(pageData.length).toBe('length');
                    expect(pageData.daysSincePublication).toBe(12);
                    expect(pageData.testVariant).toBe('testVariant');
                    expect(pageData.testExperiment).toBe('testExperiment');
                    expect(pageData.parameter).toEqual({1: 'parameter foo', 2: 'parameter bar'});
                    expect(pageData.category).toEqual({1: 'category foo', 3: 'category bar'});
                    expect(pageData.goal).toEqual({1: 'goal foo', 4: 'goal bar'});
                }, done);
            });
        });

        test('update init', (done) => {
            renderedWebtrekkPageData = mount(<WebtrekkPageData
                name='name'
                search='search'
                numberSearchResults={ 7 }
                errorMessages='errorMessages'
                paywall={ false }
                articleTitle='articleTitle'
                contentTags='contentTags'
                title='title'
                type='type'
                length='length'
                daysSincePublication={ 12 }
                testVariant='testVariant'
                testExperiment='testExperiment'
                parameter={ {1: 'parameter foo', 2: 'parameter bar'} }
                category={ {1: 'category foo', 3: 'category bar'} }
                goal={ {1: 'goal foo', 4: 'goal bar'} }
            />);

            renderedWebtrekkPageData.setProps({
                errorMessages: 'another error messages',
                title: 'new title'
            });

            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    const pageData = wtSmart.page.data.get();
                    expect(pageData.name).toBe('name');
                    expect(pageData.search).toBe('search');
                    expect(pageData.numberSearchResults).toBe(7);
                    expect(pageData.errorMessages).toBe('another error messages');
                    expect(pageData.paywall).toBe(false);
                    expect(pageData.articleTitle).toBe('articleTitle');
                    expect(pageData.contentTags).toBe('contentTags');
                    expect(pageData.title).toBe('new title');
                    expect(pageData.type).toBe('type');
                    expect(pageData.length).toBe('length');
                    expect(pageData.daysSincePublication).toBe(12);
                    expect(pageData.testVariant).toBe('testVariant');
                    expect(pageData.testExperiment).toBe('testExperiment');
                    expect(pageData.parameter).toEqual({1: 'parameter foo', 2: 'parameter bar'});
                    expect(pageData.category).toEqual({1: 'category foo', 3: 'category bar'});
                    expect(pageData.goal).toEqual({1: 'goal foo', 4: 'goal bar'});
                }, done);
            });
        });
    });
});
