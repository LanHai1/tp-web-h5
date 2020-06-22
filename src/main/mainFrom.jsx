import React, { Component } from 'react';
import './mainFrom.less';
import { Picker, List, Button, Toast, InputItem } from 'antd-mobile';
import district from './districtMock';
import { createForm } from 'rc-form';

class MainFrom extends Component {
  constructor() {
    super();
    this.state = {
      num: [1],
      hasError: false,
      VinValue: '',
      // num: [1, 1, 1, 1, 1, 1, 1, 1],
    };
  }

  render() {
    const { getFieldProps } = this.props.form;

    // 表单验证
    const onSubmit = () => {
      let flagValidate = true;

      this.onVinErrorClick((err) => {
        flagValidate = err;
      });

      this.props.form.validateFields({ force: true }, (error) => {
        if (error) {
          flagValidate = false;
          for (const key in error) {
            return Toast.info(error[key].errors[0].message);
          }
        }
      });
      // if (!this.state.VinValue.length) {
      //   return Toast.fail('请补全信息', 1);
      // }

      console.log(flagValidate);
    };
    // 验证城市
    const validateCity = (rule, value, callback) => {
      if (value.length === 0) {
        callback(new Error('请选择城市'));
      }
    };
    return (
      <div className="mainFrom">
        <h1 className="title">请填写</h1>
        <main className="fromMain">
          <List className="picker-list">
            <Picker
              extra=" "
              data={district}
              title="选择城市"
              cols={2}
              {...getFieldProps('district', {
                initialValue: [],
                rules: [{ validator: validateCity }],
              })}
              onOk={(e) => console.log('ok', e)}
            >
              <List.Item arrow="horizontal">选择城市</List.Item>
            </Picker>
          </List>
          <List className="picker-list">
            <InputItem
              placeholder="车辆Vin码"
              maxLength="17"
              error={this.state.hasError}
              onErrorClick={() => {
                this.onVinErrorClick();
              }}
              onChange={this.onChange}
              value={this.state.VinValue}
            ></InputItem>
          </List>
          <List className="picker-list">
            <InputItem
              placeholder="车主姓名"
              error={this.state.hasError}
              onErrorClick={() => {
                this.onVinErrorClick();
              }}
              onChange={this.onChange}
              value={this.state.VinValue}
            ></InputItem>
          </List>
          <List className="picker-list">
            <InputItem
              placeholder="车主证件号码"
              maxLength="18"
              error={this.state.hasError}
              onErrorClick={() => {
                this.onVinErrorClick();
              }} 
              onChange={this.onChange}
              value={this.state.VinValue}
            ></InputItem>
          </List>
        </main>
        <Button type="primary" className="submit" onClick={onSubmit}>
          提交
        </Button>
      </div>
    );
  }

  // vin
  onVinErrorClick(fn) {
    if (this.state.hasError || !this.state.VinValue.length) {
      Toast.info('车辆Vin码长度为17位');
    }
    if (fn) fn(!this.state.hasError);
  }

  // 车辆Vin验证
  onChange = (VinValue) => {
    if (VinValue.replace(/\s/g, '').length < 17) {
      this.setState({
        hasError: true,
      });
    } else {
      this.setState({
        hasError: false,
      });
    }
    this.setState({
      VinValue,
    });
  };
}

export default createForm()(MainFrom);
