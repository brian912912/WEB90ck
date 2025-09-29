import React from "react";
import { Button, Form, Input } from "antd";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { register as registerApi } from "../../services";

const Register = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = async (values) => {
        try {
            // const email = form.getFieldValue("email");
            // const username = form.getFieldValue("username");
            // const password = form.getFieldValue("password");
            const { username, password, email } = values;
            console.log("HUY LOG", username, email, password);

            const res = await registerApi({ username, password });

            if (res?.data?.isSuccess) {
                toast.success("Đăng ký thành công");
                navigate("/auth/login");
            } else {
                toast.error(res?.data?.message || "Đăng ký thất bại");
            }
        } catch (error) {
            const message = error?.response?.data?.message || "Đăng ký thất bại";
            toast.error(message);
        }
    };

    return (
        <div
            style={{
                marginTop: "20px",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div>
                <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Đăng ký</h1>
                <Form
                    form={form}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="UserName"
                        name="username"
                        rules={[{ required: true, message: "Vui lòng nhập username" }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            { required: true, message: "Vui lòng nhập email" },
                            { type: "email", message: "Email không hợp lệ" },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    {/* <Form.Item
                        label="Confirm"
                        name="confirm"
                        dependencies={["password"]}
                        rules={[
                            { required: true, message: "Xác nhận mật khẩu" },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue("password") === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error("Mật khẩu không khớp"));
                                },
                            }),
                        ]}
                    >
                    <Input.Password />
                </Form.Item> */}

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Đăng ký
                        </Button>
                        <span style={{ marginLeft: 12 }}>
                            Đã có tài khoản? <Link to="/auth/login">Đăng nhập</Link>
                        </span>
                    </Form.Item>
                </Form>
            </div>
        </div >
    );
};

export default Register;


