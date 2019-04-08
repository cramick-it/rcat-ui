import React, { Component } from 'react';

class FileInput extends Component {
	render() {
		return (
			<div className="ph0 pt0 pb3">
				<span className={`dotted-border ba dib pa0 flex items-center justify-center
												${this.props.disabled ? 'b--gray' : ''}
												${this.props.error ? 'b--red' : ''}
												${this.props.extraClass ? this.props.extraClass : ''}`}>
					{this.props.image && this.props.image !== '' ?
						(
							<img className="max-h-100 max-w-100" src={this.props.image} alt="" />
						) : (
							<>
								<input
									type="file"
									name={this.props.name}
									placeholder={this.props.placeholder}
									id={this.props.name}
									className="hidebbutton"
									onChange={this.props.onChange}
								/>
								<label htmlFor={this.props.name} className="white pv2 ph4 br1 bg-black tc f5 pointer">Choose file</label>
							</>
						)
					}
				</span>
				<span className="f6 underline dib ph0 pv2 pointer">Remove</span>
			</div>
		);
	}
}

export default FileInput;
