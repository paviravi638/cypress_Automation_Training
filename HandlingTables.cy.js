describe('Handle Tables',()=>{
    beforeEach('Login',()=>{
         cy.visit("https://demo.opencart.com/admin/index.php");
         cy.get("#input-username")//.type("demo");
         cy.get("#input-password")//.type("demo");
         cy.get("button[type='submit']").click();
         cy.get("#menu-customer>a").click();
         cy.get("#menu-customer>ul>li:first-child").click();
    })

    it('check number of rows & columns',()=>{
        
        cy.get(".table.table-bordered.table-hover>tbody>tr").should('have.length','10');
        cy.get(".table.table-bordered.table-hover>thead>tr>td").should('have.length','6');

    })

    it('check cell data from specific row & column',()=>{

        cy.get("tbody tr:nth-child(1) td:nth-child(3)").contains("!121@gmail.com");

    })

    it('Read all the rows & column data in the first page',()=>{

        cy.get(".table.table-bordered.table-hover>tbody>tr").each( ($row, index, $rows)=>{
            cy.wrap($row).within( ()=>{
                cy.get("td").each( ($col, index, $cols)=>{
                    cy.log($col.text());
                })
            })
        })
    })

    it('pagination',()=>{

        /*let totalPages;
        cy.get(".col-sm-6.text-end").then( (e)=>{
            let mytext=e.text();
            totalPages=mytext.substring(mytext.indexOf("(")+1,mytext.indexOf("Pages")-1);
            cy.log("Total number of pages in a table=====>"+totalPages);

        })
    })*/

    let totalPages=5;
    for(let p=1;p<=totalPages;p++)
    {
            if(totalPages>1)
            {
                cy.log("Active page is==="+p);
                cy.get("ul[class='pagination']>li:nth-child("+p+")").click();
                cy.wait(4000);
                cy.get(".table.table-bordered.table-hover>tbody>tr").each( ($row, index, $rows)=>{
                    cy.wrap($row).within( ()=>{
                        cy.get('td:nth-child(3)').then((e)=>{
                            cy.log(e.text());

                        })
                    })
                })
            }
    
    }
})
})
