/*!
 * Copyright 2021 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { getInstallations } from '../../lib/installations/index';
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

chai.should();
chai.use(chaiAsPromised);

describe('admin.installations', () => {
  it('deleteInstallation() fails when called with fictive-ID0 instance ID', () => {
    // instance ids have to conform to /[cdef][A-Za-z0-9_-]{9}[AEIMQUYcgkosw048]/
    return getInstallations().deleteInstallation('fictive-ID0')
      .should.eventually.be
      .rejectedWith('Installation ID "fictive-ID0": Failed to find the installation ID.');
  });
});
