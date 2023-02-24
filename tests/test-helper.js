import Application from 'ember-autofocus-modifier-with-ember-modifier/app';
import config from 'ember-autofocus-modifier-with-ember-modifier/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
