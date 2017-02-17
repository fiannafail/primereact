import React, {Component} from 'react';
import {Link} from 'react-router';
import {Growl} from '../../components/growl/Growl';
import {Button} from '../../components/button/Button';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../../components/codehighlight/CodeHighlight';

export class GrowlDemo extends Component {
        
    constructor() {
        super();
        this.state = {messages:null};
        this.showSuccess = this.showSuccess.bind(this);
        this.showInfo = this.showInfo.bind(this);
        this.showWarn = this.showWarn.bind(this);
        this.showError = this.showError.bind(this);
        this.showMultiple = this.showMultiple.bind(this);
    }

    showSuccess() {
        this.setState({messages:[{severity:'success', summary:'Success Message', detail:'Order submitted'}]});
    }

    showInfo() {
        this.setState({messages:[{severity:'info', summary:'Info Message', detail:'PrimeReact rocks'}]});
    }

    showWarn() {
        this.setState({messages:[{severity:'warn', summary:'Warn Message', detail:'There are unsaved changes'}]});
    }

    showError() {
        this.setState({messages:[{severity:'error', summary:'Error Message', detail:'Validation failed'}]});
    }

    showMultiple() {
        this.setState({messages:[
            {severity:'info', summary:'Message 1', detail:'PrimeNG rocks'},
            {severity:'info', summary:'Message 2', detail:'PrimeReact rocks'},
            {severity:'info', summary:'Message 3', detail:'PrimeFaces rocks'}
        ]});
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>Growl</h1>
                        <p>Growl is used to display messages in an overlay.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Growl value={this.state.messages}></Growl>

                    <div>
                        <Button onClick={this.showSuccess} label="Success" className="ui-button-success" />
                        <Button onClick={this.showInfo} label="Info" className="ui-button-info" />
                        <Button onClick={this.showWarn} label="Warn" className="ui-button-warning" />
                        <Button onClick={this.showError} label="Error" className="ui-button-danger" />
                        <Button onClick={this.showMultiple} label="Multiple" />
                    </div>
                </div>
                <GrowlDoc></GrowlDoc>
            </div>
        )
    }
}

export class GrowlDoc extends Component {
    
    render() {
        return (
            <div className="content-section source">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {Growl} from 'primereact';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>A single message is specified by Message interface in PrimeReact that defines the severity,
               summary and detail properties. Messages to display on growl are defined using the value
               property which should an array of Message instances.</p>
<CodeHighlight className="language-markup">
{`
<Growl value={this.state.messages}></Growl>

`}
</CodeHighlight>

            <h3>Severities</h3>
            <p>Here are the possible values for the severity of a message.</p>
            
            <ul>
                <li>
                    success
                </li>
                <li>
                    info
                </li>
                <li>
                    warn
                </li>
                <li>
                    error
                </li>
            </ul>
            
            <h3>Showing Messages</h3>
            <p>Adding messages to the array is enough to display them. Similarly removing a message from the array is also removed from the UI.</p>

<CodeHighlight className="language-markup">
{`
<Growl value={this.state.messages}></Growl>

<Button onClick={this.showSuccess} label="Success" className="ui-button-success" />
<Button onClick={this.showInfo} label="Info" className="ui-button-info" />
<Button onClick={this.showWarn} label="Warn" className="ui-button-warning" />
<Button onClick={this.showError} label="Error" className="ui-button-danger" />
<Button onClick={this.showMultiple} label="Multiple" />

`}
</CodeHighlight>

<CodeHighlight className="language-javascript">
{`
showSuccess() {
    this.setState({messages:[{severity:'success', summary:'Success Message', detail:'Order submitted'}]});
}

showInfo() {
    this.setState({messages:[{severity:'info', summary:'Info Message', detail:'PrimeReact rocks'}]});
}

showWarn() {
    this.setState({messages:[{severity:'warn', summary:'Warn Message', detail:'There are unsaved changes'}]});
}

showError() {
    this.setState({messages:[{severity:'error', summary:'Error Message', detail:'Validation failed'}]});
}

showMultiple() {
    this.setState({messages:[
        {severity:'info', summary:'Message 1', detail:'PrimeNG rocks'},
        {severity:'info', summary:'Message 2', detail:'PrimeReact rocks'},
        {severity:'info', summary:'Message 3', detail:'PrimeFaces rocks'}
    ]});
}

`}
</CodeHighlight>

            <h3>Closable</h3>
            <p>Growls are closable by default resulting in a close icon being displayed on top right corner.</p>

<CodeHighlight className="language-markup">
{`
<Growl value={this.state.messages}></Growl>

`}
</CodeHighlight>

            <p>In order to disable closable messages, set closable to false.</p>

<CodeHighlight className="language-markup">
{`
<Growl value={this.state.messages} closable={false}></Growl>

`}
</CodeHighlight>

            <h3>Attributes</h3>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>closable</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Defines if growl box can be closed by the click icon..</td>
                        </tr>
                        <tr>
                            <td>style</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Inline style of the element.</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the element.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Events</h3>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Parameters</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>onChange</td>
                            <td>event.originalEvent: Original event <br />
                                event.value: Value of the checkbox <br />
                                event.checked: Checked state as a boolean.</td>
                            <td>Callback to invoke on value change</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Styling</h3>
            <p>Following is the list of structural style classes, for theming classes visit <Link to="/theming"> theming</Link> page.</p>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Element</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ui-growl</td>
                            <td>Main container element.</td>
                        </tr>
                        <tr>
                            <td>ui-growl-container</td>
                            <td>Container of a message item.</td>
                        </tr>
                        <tr>
                            <td>ui-growl-item</td>
                            <td>Message element.</td>
                        </tr>
                        <tr>
                            <td>ui-growl-icon-close</td>
                            <td>Close icon of a message.</td>
                        </tr>
                        <tr>
                            <td>ui-growl-image</td>
                            <td>Severity icon.</td>
                        </tr>
                        <tr>
                            <td>ui-growl-message</td>
                            <td>Container of message texts.</td>
                        </tr>
                        <tr>
                            <td>ui-growl-title</td>
                            <td>Summary of the message.</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Dependencies</h3>
                <p>None.</p>
            </div>
            
            </TabPanel>

            <TabPanel header="Source">
<CodeHighlight className="language-javascript">
{`
export class GrowlDemo extends Component {
        
    constructor() {
        super();
        this.state = {messages:null};
        this.showSuccess = this.showSuccess.bind(this);
        this.showInfo = this.showInfo.bind(this);
        this.showWarn = this.showWarn.bind(this);
        this.showError = this.showError.bind(this);
        this.showMultiple = this.showMultiple.bind(this);
    }

    showSuccess() {
        this.setState({messages:[{severity:'success', summary:'Success Message', detail:'Order submitted'}]});
    }

    showInfo() {
        this.setState({messages:[{severity:'info', summary:'Info Message', detail:'PrimeReact rocks'}]});
    }

    showWarn() {
        this.setState({messages:[{severity:'warn', summary:'Warn Message', detail:'There are unsaved changes'}]});
    }

    showError() {
        this.setState({messages:[{severity:'error', summary:'Error Message', detail:'Validation failed'}]});
    }

    showMultiple() {
        this.setState({messages:[
            {severity:'info', summary:'Message 1', detail:'PrimeNG rocks'},
            {severity:'info', summary:'Message 2', detail:'PrimeReact rocks'},
            {severity:'info', summary:'Message 3', detail:'PrimeFaces rocks'}
        ]});
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>Growl</h1>
                        <p>Growl is used to display messages in an overlay.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Growl value={this.state.messages}></Growl>

                    <div>
                        <Button onClick={this.showSuccess} label="Success" className="ui-button-success" />
                        <Button onClick={this.showInfo} label="Info" className="ui-button-info" />
                        <Button onClick={this.showWarn} label="Warn" className="ui-button-warning" />
                        <Button onClick={this.showError} label="Error" className="ui-button-danger" />
                        <Button onClick={this.showMultiple} label="Multiple" />
                    </div>
                </div>
                <GrowlDoc></GrowlDoc>
            </div>
        )
    }
}

`}
</CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        );
    }
}