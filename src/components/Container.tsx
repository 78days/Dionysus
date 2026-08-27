type ContainerPropType = {
	children: React.ReactNode;
};

const Container = ({ children }: ContainerPropType) => {
	return <div className="flex flex-col max-w-7xl mx-auto">{children}</div>;
};

export default Container;
