export const WrapperStyle = () => (
  <style jsx>{`
    .wrapper {
        padding: 0 25%;
        transition: padding 420ms;
    }

    @media (max-width: 900px) {
        .wrapper {
            padding: 0 3%;
        }
        
    }
`}
  </style>
);
