import React from 'react';
import { shallow, mount } from './../../enzyme';
import { expectInCallback } from './../../helper';
import { WebtrekkExtension, WebtrekkSmartPixelReact } from './../../../lib/index';

describe('WebtrekkExtension', () => {
    let spyOnError;

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
                <WebtrekkExtension name={ true } action={ false } config={ 0 } />
            );

            expect(spyOnError).toHaveBeenCalled();
            expect(spyOnError.mock.calls.length).toBe(3);

            expect(spyOnError.mock.calls[0][0]).toContain('Invalid prop `name` of type `boolean` supplied to `WebtrekkExtension`, expected `string`.');
            expect(spyOnError.mock.calls[1][0]).toContain('Invalid prop `action` of type `boolean` supplied to `WebtrekkExtension`, expected `string`.');
            expect(spyOnError.mock.calls[2][0]).toContain('Invalid prop `config` of type `number` supplied to `WebtrekkExtension`, expected `object`.');
        });

        test('don\'t returns children', () => {
            const renderedWebtrekkExtension = shallow(<WebtrekkExtension />);
            expect(renderedWebtrekkExtension).toEqual({});
        });
    });

    describe('full rendering', () => {
        beforeEach(() => {
            spyOnError = jest.spyOn(console, 'error').mockImplementation(() => {});
        });

        afterEach(() => {
            spyOnError.mockRestore();

            spyOnError = null;
        });

        test('activate scroll position', (done) => {
            mount(<WebtrekkExtension
                name='scroll_position'
                action='activate'
            />);

            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    expect(wtSmart.extension.scroll_position.isActivated()).toBe(true);

                    wtSmart.extension.scroll_position.deactivate();
                }, done);
            });
        });

        test('configure scroll position', (done) => {
            mount(<WebtrekkExtension
                name='scroll_position'
                action='config'
                config={ {
                    roundResult: false,
                    pageHeight: '6',
                    sendAsFigure: '12'
                } }
            />);

            WebtrekkSmartPixelReact.call((wtSmart) => {
                expectInCallback(() => {
                    const data = wtSmart.extension.scroll_position.config();
                    expect(data.roundResult).toBe(false);
                    expect(data.pageHeight).toBe('6');
                    expect(data.sendAsFigure).toBe('12');
                }, done);
            });
        });
    });
});
